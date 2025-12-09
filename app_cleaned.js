//
const CONFIG = {
    STORAGE_KEYS: {
        MESSAGES: 'chat_messages',
        REPLIES: 'chat_replies',
        SETTINGS: 'chat_settings',
        BACKGROUND_IMAGE: 'chat_background_image',
        MY_AVATAR: 'chat_my_avatar',
        BOT_AVATAR: 'chat_bot_avatar',
        STICKERS: 'chat_stickers',
        FONT_SIZE: 'fontSize',
        CHECKIN_DATA: 'dragonCheckin',
        INTIMACY_POINTS: 'spring_snow_points',
        INTIMACY_LEVEL: 'spring_snow_level',
        START_DATE: 'spring_snow_start_date'
    },
    DEFAULT_REPLIES: [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    ],
    ACTION_REPLIES: [
        "**",
        "**",
        "**",
        "**",
        "**",
        "**",
        "**",
        "**"
    ],
    ACTION_REPLY_CHANCE: 0.2 // 20%
};

//
const rewardMessages = [
    "",
    "",
    "~",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
];

//  -
const msg_time = [
    "",
    "",
    "",
    "",
    ""
];

//  -
const msg_health = [
    "",
    "",
    "",
    "",
    ""
];

//  -
const msg_emotion = [
    "",
    "",
    "",
    ""
];

//  -
const msg_diary = [
    "",
    "",
    "",
    ""
];

//  -
const msg_miss = [
    "",
    "",
    "",
    ""
];

//
const activeCareMessages = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
];

//
function pickGroup() {
    const groups = [msg_time, msg_health, msg_emotion, msg_diary, msg_miss];
    return groups[Math.floor(Math.random() * groups.length)];
}

//
const activeCareState = {
    lastTriggerTime: 0,
    lastMessageIndex: -1,
    lastUserMessageTime: 0
};

//
function checkActiveCareMessage() {
    // 1.  (00:00-07:00)
    const now = new Date();
    const hour = now.getHours();
    if (hour >= 0 && hour < 7) {
        return; //
    }

    // 2. 5
    const timeSinceLastUserMsg = now.getTime() - activeCareState.lastUserMessageTime;
    if (timeSinceLastUserMsg < 5 * 60 * 1000) {
        return; // 5
    }

    // 3.  (40-90)
    const cooldownTime = Math.random() * (90 - 40) + 40;
    const timeSinceLastTrigger = now.getTime() - activeCareState.lastTriggerTime;
    if (timeSinceLastTrigger < cooldownTime * 60 * 1000) {
        return; //
    }

    // 4.
    const todayKey = getDateKey(now);

    //
    const dailyNote = dailyNotes[todayKey];
    const hasDailyRecord = dailyNote && (dailyNote.food || dailyNote.workout || dailyNote.letter);

    //
    const hasCheckinDiary = checkinData[todayKey] && checkinData[todayKey].notes && checkinData[todayKey].notes.length > 0;

    //
    const hasWrittenDiary = hasDailyRecord || hasCheckinDiary;

    // 5.
    let triggerChance;
    if (!hasWrittenDiary) {
        triggerChance = 0.5; // 50%
    } else {
        triggerChance = Math.random() * (0.12 - 0.05) + 0.05; // 5%-12%
    }

    // 6.
    if (!chance(triggerChance)) {
        return;
    }

    // 7.
    let messageIndex;
    do {
        messageIndex = Math.floor(Math.random() * activeCareMessages.length);
    } while (messageIndex === activeCareState.lastMessageIndex);

    const selectedMessage = activeCareMessages[messageIndex];

    // 8.
    const botMessage = {
        id: Date.now(),
        text: selectedMessage,
        role: 'bot',
        timestamp: new Date().toISOString()
    };

    appState.messages.push(botMessage);
    renderMessage(botMessage);
    scrollToBottom();
    saveToStorage();

    // 9.
    activeCareState.lastTriggerTime = now.getTime();
    activeCareState.lastMessageIndex = messageIndex;
}

//
setInterval(checkActiveCareMessage, 60000); //

//
function randMsg() {
    const g = pickGroup();
    return g[Math.floor(Math.random() * g.length)];
}

//
function chance(p) { return Math.random() < p; }

//
let appState = {
    messages: [],
    replies: [],
    stickers: [],
    isLoading: false,
    quotedMessage: null,
    settings: {
        theme: 'pink'
    },
    avatars: {
        my: null,
        bot: null
    },
    //
    intimacy: {
        totalPoints: 0,
        level: 0
    },
    //
    autoMessageCount: 0,
    lastAutoMessageTime: 0,
    startDate: null //
};

//
let dailyNotes = JSON.parse(localStorage.getItem("dailyNotes") || "{}");

function saveDailyNotes() {
    localStorage.setItem("dailyNotes", JSON.stringify(dailyNotes));
}

//
function getReward() {
    //
    const randomIndex = Math.floor(Math.random() * rewardMessages.length);
    return rewardMessages[randomIndex];
}

//
let currentDailyDate = new Date();

//
function isToday(date) {
    const today = new Date();
    return date.toDateString() === today.toDateString();
}

//
function isFutureDate(date) {
    const today = new Date();
    // 000
    today.setHours(0, 0, 0, 0);
    const compareDate = new Date(date);
    compareDate.setHours(0, 0, 0, 0);
    return compareDate > today;
}

function formatDate(d) {
    return d.toISOString().split("T")[0];
}

//
function formatDateForDisplay(d) {
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();
    return `${year}${month}${day}`;
}

//
let currentPickerYear;
let currentPickerMonth;

//
function openDatePicker(){
    document.getElementById("datePickerModal").classList.remove("hidden");
    const now = parseDailyDate(appState.currentDailyDate || new Date());
    currentPickerYear = now.year;
    currentPickerMonth = now.month;
    renderYear();
    renderMonths();
    renderCalendar();
}

//
function parseDailyDate(d) {
    const x = new Date(d);
    return {year: x.getFullYear(), month: x.getMonth()+1, day: x.getDate()};
}

//
function renderYear() {
    document.getElementById("dpYearText").textContent = currentPickerYear + " ";
}

//
function renderMonths() {
    const box = document.querySelector(".dp-months");
    if (!box) return; //
    box.innerHTML = "";
    for(let m=1; m<=12; m++) {
        const b = document.createElement("button");
        b.textContent = m + "";
        b.setAttribute("data-month", m); // data-month
        if(m === currentPickerMonth) b.classList.add("active");
        b.onclick = () => {
            //
            currentPickerMonth = m;

            //
            closeDatePicker();

            //
            currentDailyDate = new Date(currentPickerYear, currentPickerMonth - 1, 1);

            //
            loadDailyNotes();

            //
            DOM.dailyDateTitle.innerText = formatDateForDisplay(currentDailyDate);
        };
        box.appendChild(b);
    }
}

//
function renderCalendar() {
    const box = document.querySelector(".dp-calendar");
    box.innerHTML = "";

    //
    ["","","","","","",""].forEach(t => {
        const c = document.createElement("div");
        c.classList.add("day-title");
        c.textContent = t;
        box.appendChild(c);
    });

    //
    const first = new Date(currentPickerYear, currentPickerMonth-1, 1);
    const start = first.getDay() === 0 ? 7 : first.getDay();

    //
    for(let i=1; i<start; i++) {
        box.appendChild(document.createElement("div"));
    }

    //
    const days = new Date(currentPickerYear, currentPickerMonth, 0).getDate();

    //
    for(let d=1; d<=days; d++) {
        const cell = document.createElement("div");
        cell.classList.add("day-cell", "selectable");
        cell.textContent = d;

        //
        const currentDate = appState.currentDailyDate ? new Date(appState.currentDailyDate) : new Date();
        if(currentPickerYear === currentDate.getFullYear() &&
           currentPickerMonth === currentDate.getMonth()+1 &&
           d === currentDate.getDate()) {
            cell.classList.add("selected");
        }

        cell.onclick = () => {
            const full = `${currentPickerYear}-${String(currentPickerMonth).padStart(2,"0")}-${String(d).padStart(2,"0")}`;
            setDailyDate(full);
            closeDatePicker();
            loadDailyNotes();
        };
        box.appendChild(cell);
    }
}

//
function setDailyDate(date) {
    appState.currentDailyDate = date;
    saveToStorage();
    //
    const dailyDateTitle = document.getElementById("dailyDateTitle");
    if (dailyDateTitle) {
        dailyDateTitle.textContent = formatDateForDisplay(new Date(date));
    }
}

//
function closeDatePicker() {
    const datePickerModal = document.getElementById("datePickerModal");
    if (datePickerModal) {
        datePickerModal.classList.add("hidden");
    }
}

//
function bindDatePickerEvents() {
    //
    if (DOM.dailyDateTitle) {
        DOM.dailyDateTitle.onclick = openDatePicker;
    }

    //
    const dpPrevYear = document.getElementById("dpPrevYear");
    const dpNextYear = document.getElementById("dpNextYear");
    if (dpPrevYear) dpPrevYear.onclick = () => {
        currentPickerYear--;
        renderYear();
        renderCalendar();
    };
    if (dpNextYear) dpNextYear.onclick = () => {
        currentPickerYear++;
        renderYear();
        renderCalendar();
    };

    //
    const dpCloseBtn = document.getElementById("dpCloseBtn");
    if (dpCloseBtn) dpCloseBtn.onclick = closeDatePicker;

    //
    const datePickerModal = document.getElementById("datePickerModal");
    if (datePickerModal) datePickerModal.onclick = (e) => {
        if(e.target.id === "datePickerModal") closeDatePicker();
    };
}

//
function updateIntimacyDisplay() {
    console.log('Update Intimacy Display Called'); // Debug Log
    const headerTitle = document.querySelector('.chat-header h1');
    if (headerTitle) {
        //
        const existingIntimacy = headerTitle.querySelector('.intimacy-display');
        if (existingIntimacy) {
            existingIntimacy.remove();
        }

        //
        const intimacyElement = document.createElement('div');
        intimacyElement.className = 'intimacy-display';
        //  CSS
        intimacyElement.innerHTML = ` <img src="assets/icon/heart_fire.png" class="spring-icon" /> LV ${appState.intimacy.level}`;

        //
        intimacyElement.addEventListener('click', showIntimacyModal);

        headerTitle.appendChild(intimacyElement);
    }
}

//
function calculateIntimacyLevel(points) {
    return Math.floor(points / 20);
}

//
function addIntimacyPoints(points, reason = '') {
    if (points <= 0) return;

    const oldLevel = appState.intimacy.level;
    appState.intimacy.totalPoints += points;
    appState.intimacy.level = calculateIntimacyLevel(appState.intimacy.totalPoints);

    //
    updateIntimacyDisplay();

    //
    if (appState.intimacy.level > oldLevel) {
        //
        const levelUpMessage = {
            id: Date.now(),
            text: ` <img src="assets/icon/heart_fire.png" class="spring-icon" />  LV ${appState.intimacy.level}`,
            role: 'system',
            timestamp: new Date().toISOString()
        };

        //
        appState.messages.push(levelUpMessage);
        renderMessage(levelUpMessage);
        scrollToBottom();
        saveToStorage();

        // 700-1500ms
        const delay = 700 + Math.random() * 800;
        setTimeout(() => {
            simulateBotReply();
        }, delay);
    }

    //
    saveToStorage();
}

// DOM
const DOM = {
    appContainer: document.querySelector('.chat-app'),
    messagesContainer: document.getElementById('messages'),
    chatContent: document.querySelector('.chat-content'),
    messageInput: document.getElementById('messageInput'),
    sendBtn: document.getElementById('sendBtn'),
    settingsBtn: document.getElementById('settingsBtn'),
    closeSettingsBtn: document.getElementById('closeSettingsBtn'),
    settingsPanel: document.getElementById('settingsPanel'),
    quotePreview: document.getElementById('quotePreview'),
    quoteContent: document.querySelector('.quote-content'),
    cancelQuoteBtn: document.getElementById('cancelQuoteBtn'),
    contextMenu: document.getElementById('contextMenu'),
    quoteMsgBtn: document.getElementById('quoteMsgBtn'),
    bgFileInput: document.getElementById('bgFileInput'),
    resetBgBtn: document.getElementById('resetBgBtn'),
    importChatInput: document.getElementById('importChatInput'),
    exportChatBtn: document.getElementById('exportChatBtn'),
    myAvatarInput: document.getElementById('myAvatarInput'),
    botAvatarInput: document.getElementById('botAvatarInput'),
    resetAvatarBtn: document.getElementById('resetAvatarBtn'),
    emojiBtn: document.querySelector('.emoji-btn'),
    stickerPanel: document.querySelector('.sticker-panel'),
    stickerList: document.querySelector('.sticker-list'),
    addStickerBtn: document.querySelector('.add-sticker-btn'),
    stickerFileInput: document.getElementById('stickerFileInput'),
    dragonBtn: document.getElementById('dragon-btn'),
    calendarModal: document.querySelector('.dragon-calendar-modal'),
    closeCalendarBtn: document.querySelector('.close-calendar'),
    calendarGrid: document.querySelector('.calendar-grid'),
    monthSelector: document.querySelector('.month-selector'),
    currentMonth: document.querySelector('.current-month'),
    prevMonthBtn: document.querySelector('.month-arrow.prev'),
    nextMonthBtn: document.querySelector('.month-arrow.next'),
    checkinCount: document.getElementById('checkin-count'),
    streakCount: document.getElementById('streak-count'),
    diaryList: document.getElementById('diary-list'),
    diaryInput: document.getElementById('diary-input'),
    diarySubmitBtn: document.getElementById('diary-submit-btn'),
    //
    dailyNotesPanel: document.getElementById('dailyNotesPanel'),
    dailyDateTitle: document.getElementById('dailyDateTitle'),
    dailyPrev: document.getElementById('dailyPrev'),
    dailyNext: document.getElementById('dailyNext'),
    dailyCloseBtn: document.getElementById('dailyCloseBtn'),
    foodInput: document.getElementById('foodInput'),
    workoutInput: document.getElementById('workoutInput'),
    letterInput: document.getElementById('letterInput'),
    dailySaveBtn: document.getElementById('dailySaveBtn'),
    dailyExportBtn: document.getElementById('dailyExportBtn'),
    openDailyNotesBtn: document.getElementById('openDailyNotesBtn'),
    letterCard: document.getElementById('letterCard'),
    dailyFooterNote: document.getElementById('dailyFooterNote'),
    //
    extraReplyIcon: document.getElementById('extraReplyIcon'),
    //
    moreBtn: document.getElementById('more-btn'),
    moreMenu: document.getElementById('moreMenu'),
    //
    intimacyModal: document.getElementById('intimacyModal'),
    closeIntimacyModalBtn: document.getElementById('closeIntimacyModalBtn')
};

//
function initApp() {
    //
    loadFromStorage();

    //
    applySettings();

    //
    renderMessages();

    //
    renderStickers();

    //
    bindEventListeners();

    //
    initSettingsPanel();

    //
    checkChatDiaryReminder();

    //
    window.lastChatTime = Date.now();

    // 3
    setInterval(() => {
        const now = Date.now();
        if (now - window.lastChatTime > 180000 && chance(0.15)) {
            aoyinChatRemind("");
        }
    }, 60000);
}

//
function loadFromStorage() {
    try {
        //
        const savedSettings = localStorage.getItem(CONFIG.STORAGE_KEYS.SETTINGS);
        appState.settings = savedSettings ? JSON.parse(savedSettings) : {
            theme: 'pink'
        };

        //
        const savedMessages = localStorage.getItem(CONFIG.STORAGE_KEYS.MESSAGES);
        appState.messages = savedMessages ? JSON.parse(savedMessages) : [];

        //
        const savedReplies = localStorage.getItem(CONFIG.STORAGE_KEYS.REPLIES);
        appState.replies = savedReplies ? JSON.parse(savedReplies) : CONFIG.DEFAULT_REPLIES;

        //
        const savedStickers = localStorage.getItem(CONFIG.STORAGE_KEYS.STICKERS);
        appState.stickers = savedStickers ? JSON.parse(savedStickers) : [];

        //
        const myAvatar = localStorage.getItem(CONFIG.STORAGE_KEYS.MY_AVATAR);
        appState.avatars.my = myAvatar;

        const botAvatar = localStorage.getItem(CONFIG.STORAGE_KEYS.BOT_AVATAR);
        appState.avatars.bot = botAvatar;

        //
        const savedBg = localStorage.getItem(CONFIG.STORAGE_KEYS.BACKGROUND_IMAGE);
        if (savedBg) {
            document.documentElement.style.setProperty('--background-image', `url(${savedBg})`);
        }

        //
        const savedPoints = localStorage.getItem(CONFIG.STORAGE_KEYS.INTIMACY_POINTS);
        const savedLevel = localStorage.getItem(CONFIG.STORAGE_KEYS.INTIMACY_LEVEL);

        appState.intimacy.totalPoints = savedPoints ? parseInt(savedPoints) : 0;
        appState.intimacy.level = savedLevel ? parseInt(savedLevel) : 0;

        //
        updateIntimacyDisplay();

        //
        const savedStartDate = localStorage.getItem(CONFIG.STORAGE_KEYS.START_DATE);
        if (savedStartDate) {
            appState.startDate = parseInt(savedStartDate);

            //  10 ~ 600  585 < 10 583  ( 584)
            //  584
            const currentDays = Math.ceil(Math.abs(Date.now() - appState.startDate) / (1000 * 60 * 60 * 24));
            if (currentDays < 600 && currentDays !== 584) {
                appState.startDate = Date.now() - (583 * 24 * 60 * 60 * 1000);
                localStorage.setItem(CONFIG.STORAGE_KEYS.START_DATE, appState.startDate.toString());
            }
        } else {
            //  583
            appState.startDate = Date.now() - (583 * 24 * 60 * 60 * 1000);
            localStorage.setItem(CONFIG.STORAGE_KEYS.START_DATE, appState.startDate.toString());
        }

    } catch (error) {
        console.error(':', error);
        //
        appState.messages = [];
        appState.replies = CONFIG.DEFAULT_REPLIES;
        appState.stickers = [];
        appState.settings = {
            theme: 'pink'
        };
        appState.avatars = {
            my: null,
            bot: null
        };
        appState.intimacy = {
            totalPoints: 0,
            level: 0
        };
    }
}

//
function saveToStorage() {
    try {
        localStorage.setItem(CONFIG.STORAGE_KEYS.MESSAGES, JSON.stringify(appState.messages));
        localStorage.setItem(CONFIG.STORAGE_KEYS.REPLIES, JSON.stringify(appState.replies));
        localStorage.setItem(CONFIG.STORAGE_KEYS.STICKERS, JSON.stringify(appState.stickers));
        localStorage.setItem(CONFIG.STORAGE_KEYS.SETTINGS, JSON.stringify(appState.settings));

        //
        if (appState.avatars.my) {
            localStorage.setItem(CONFIG.STORAGE_KEYS.MY_AVATAR, appState.avatars.my);
        }
        if (appState.avatars.bot) {
            localStorage.setItem(CONFIG.STORAGE_KEYS.BOT_AVATAR, appState.avatars.bot);
        }

        //
        localStorage.setItem(CONFIG.STORAGE_KEYS.INTIMACY_POINTS, appState.intimacy.totalPoints.toString());
        localStorage.setItem(CONFIG.STORAGE_KEYS.INTIMACY_LEVEL, appState.intimacy.level.toString());
    } catch (error) {
        console.error(':', error);
    }
}

//
function applySettings() {
    //
    document.documentElement.setAttribute('data-theme', appState.settings.theme);
}

//
function showRewardMessage() {
    //
}

//
function showCareMessage() {
    //
}

//
function loadDailyNotes() {
    const dateStr = formatDate(currentDailyDate);
    const displayDate = formatDateForDisplay(currentDailyDate);
    DOM.dailyDateTitle.innerText = displayDate;

    const data = dailyNotes[dateStr] || {
        food: "",
        workout: "",
        letter: "",
        footerMessage: ""
    };

    DOM.foodInput.value = data.food;
    DOM.workoutInput.value = data.workout;
    DOM.letterInput.value = data.letter;

    //
    if (DOM.dailyFooterNote) {
        DOM.dailyFooterNote.innerText = data.footerMessage || "" + getReward();
    }

    //
    DOM.letterCard.querySelector('h3').innerText = "  " + dateStr;

    //
    const isTodayDate = isToday(currentDailyDate);

    //
    DOM.foodInput.disabled = !isTodayDate;
    DOM.workoutInput.disabled = !isTodayDate;
    DOM.letterInput.disabled = !isTodayDate;
    DOM.dailySaveBtn.disabled = !isTodayDate;

    //
    //  Daily Notes  20%
    // 3
}

//
//
function triggerPatPat() {
    //
    if (navigator.vibrate) {
        navigator.vibrate([30, 40, 30]);
    }

    //
    const patMessage = {
        id: Date.now(),
        text: " ",
        role: 'system',
        timestamp: new Date().toISOString()
    };

    //
    appState.messages.push(patMessage);
    renderMessage(patMessage);

    scrollToBottom();
    saveToStorage();
}

function bindEventListeners() {
    //
    if (DOM.sendBtn) {
        DOM.sendBtn.addEventListener('click', sendMessage);
    }

    //
    document.addEventListener('DOMContentLoaded', () => {
        // avatar
        if (DOM.messagesContainer) {
            DOM.messagesContainer.addEventListener('dblclick', (e) => {
                const avatarElement = e.target.closest('.avatar:not(.message.user .avatar)');
                if (avatarElement) {
                    triggerPatPat();
                }
            });
        }
    });

    //
    //
    if (DOM.openDailyNotesBtn) {
        DOM.openDailyNotesBtn.addEventListener('click', () => {
            DOM.dailyNotesPanel.style.display = "block";
            loadDailyNotes();
        });
    }

    //
    if (DOM.dailyCloseBtn) {
        DOM.dailyCloseBtn.addEventListener('click', () => {
            DOM.dailyNotesPanel.style.display = "none";
        });
    }

    //
    if (DOM.dailySaveBtn) {
        DOM.dailySaveBtn.addEventListener('click', () => {
            //
            if (!isToday(currentDailyDate)) {
                return;
            }

            const dateStr = formatDate(currentDailyDate);
            const foodVal = DOM.foodInput.value;
            const letterVal = DOM.letterInput.value;
            const hour = new Date().getHours();

            //
            const msg = "" + getReward();
            if (DOM.dailyFooterNote) {
                DOM.dailyFooterNote.innerText = msg;
            }

            dailyNotes[dateStr] = {
                food: foodVal,
                workout: DOM.workoutInput.value,
                letter: letterVal,
                footerMessage: msg
            };

            saveDailyNotes();

            // /// 35%
            if (/|||/.test(foodVal) && chance(0.35)) {
                //
            }

            // 23 30%
            if (hour >= 23 && chance(0.30)) {
                //
            }

            //
            if (letterVal.trim()) {
                if (letterVal.length > 50) {
                    // 50 +15
                    addIntimacyPoints(15, '50');
                } else {
                    //  +10
                    addIntimacyPoints(10, '');
                }
            }
        });
    }

    //
    if (DOM.dailyPrev) {
        DOM.dailyPrev.addEventListener('click', () => {
            currentDailyDate.setDate(currentDailyDate.getDate() - 1);
            loadDailyNotes();
        });
    }

    if (DOM.dailyNext) {
        DOM.dailyNext.addEventListener('click', () => {
            const tomorrow = new Date(currentDailyDate);
            tomorrow.setDate(tomorrow.getDate() + 1);
            //
            if (!isFutureDate(tomorrow)) {
                currentDailyDate = tomorrow;
                loadDailyNotes();
            }
        });
    }

    //
    if (DOM.dailyExportBtn) {
        DOM.dailyExportBtn.addEventListener('click', () => {
            const dateStr = formatDate(currentDailyDate);
            const data = dailyNotes[dateStr] || {};
            const text = `Date: ${dateStr}\n\nFOOD:\n${data.food || ''}\n\nWORKOUT:\n${data.workout || ''}\n\nTo :\n${data.letter || ''}\n\n\n${data.footerMessage || ""}`;

            const blob = new Blob([text], { type: "text/plain" });
            const a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            a.download = `DailyNotes-${dateStr}.txt`;
            a.click();
        });
    }

    //
    if (DOM.messageInput) {
        DOM.messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }

    //
    bindDatePickerEvents();

    //
    if (DOM.settingsBtn) {
        DOM.settingsBtn.addEventListener('click', () => {
            if (DOM.settingsPanel) {
                DOM.settingsPanel.classList.add('open');
            }
            //
            if (chance(0.10)) {
                aoyinChatRemind("");
            }
        });
    }

    //
    if (DOM.closeSettingsBtn) {
        DOM.closeSettingsBtn.addEventListener('click', () => {
            if (DOM.settingsPanel) {
                DOM.settingsPanel.classList.remove('open');
            }
        });
    }

    //
    if (DOM.cancelQuoteBtn) {
        DOM.cancelQuoteBtn.addEventListener('click', cancelQuote);
    }

    //
    if (DOM.quoteMsgBtn) {
        DOM.quoteMsgBtn.addEventListener('click', quoteSelectedMessage);
    }

    //
    document.addEventListener('click', (e) => {
        if (!DOM.contextMenu.contains(e.target)) {
            DOM.contextMenu.style.display = 'none';
        }

        //
        if (!DOM.stickerPanel.contains(e.target) && !DOM.emojiBtn.contains(e.target)) {
            DOM.stickerPanel.style.display = 'none';
        }
    });

    //
    if (DOM.messagesContainer) {
        DOM.messagesContainer.addEventListener('contextmenu', handleContextMenu);
    }

    //
    if (DOM.bgFileInput) {
        DOM.bgFileInput.addEventListener('change', handleBgUpload);
    }

    //
    if (DOM.resetBgBtn) {
        DOM.resetBgBtn.addEventListener('click', resetBackground);
    }

    //
    if (DOM.importChatInput) {
        DOM.importChatInput.addEventListener('change', handleChatImport);
    }

    //
    if (DOM.exportChatBtn) {
        DOM.exportChatBtn.addEventListener('click', exportChatHistory);
    }

    //
    if (DOM.myAvatarInput) {
        DOM.myAvatarInput.addEventListener('change', (e) => handleAvatarUpload(e, 'my'));
    }
    if (DOM.botAvatarInput) {
        DOM.botAvatarInput.addEventListener('change', (e) => handleAvatarUpload(e, 'bot'));
    }

    //
    if (DOM.resetAvatarBtn) {
        DOM.resetAvatarBtn.addEventListener('click', resetAvatars);
    }

    //
    addLongPressSupport();

    //  -
    if (DOM.emojiBtn) {
        DOM.emojiBtn.addEventListener('click', () => {
            toggleStickerPanel();
            //
            if (chance(0.10)) {
                aoyinChatRemind("");
            }
        });
    }

    //
    if (DOM.addStickerBtn) {
        DOM.addStickerBtn.addEventListener('click', () => {
            if (DOM.stickerFileInput) {
                DOM.stickerFileInput.click();
            }
        });
    }

    //
    if (DOM.stickerFileInput) {
        DOM.stickerFileInput.addEventListener('change', handleStickerUpload);
    }

    //
    if (DOM.stickerList) {
        DOM.stickerList.addEventListener('click', (e) => {
            if (e.target.tagName === 'IMG') {
                sendSticker(e.target.src);
            }
        });
    }

    //
    addStickerLongPressSupport();

    //  -
    if (DOM.dragonBtn) {
        DOM.dragonBtn.addEventListener('click', () => {
            openCalendar();
            //
            if (DOM.moreMenu) {
                DOM.moreMenu.style.display = 'none';
            }
        });
    }

    //
    if (DOM.moreBtn && DOM.moreMenu) {
        DOM.moreBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            // /
            if (DOM.moreMenu.style.display === 'none' || DOM.moreMenu.style.display === '') {
                DOM.moreMenu.style.display = 'flex';
            } else {
                DOM.moreMenu.style.display = 'none';
            }
        });

        //
        document.addEventListener('click', (e) => {
            if (!DOM.moreBtn.contains(e.target) && !DOM.moreMenu.contains(e.target)) {
                DOM.moreMenu.style.display = 'none';
            }
        });
    }

    //
    if (DOM.closeCalendarBtn) {
        DOM.closeCalendarBtn.addEventListener('click', () => {
            closeCalendar();
        });
    }

    //
    if (DOM.calendarModal) {
        DOM.calendarModal.addEventListener('click', (e) => {
            if (e.target === DOM.calendarModal) {
                closeCalendar();
            }
        });
    }

    //
    if (DOM.closeIntimacyModalBtn) {
        DOM.closeIntimacyModalBtn.addEventListener('click', closeIntimacyModal);
    }

    if (DOM.intimacyModal) {
        DOM.intimacyModal.addEventListener('click', (e) => {
            if (e.target === DOM.intimacyModal) {
                closeIntimacyModal();
            }
        });
    }

    //
    if (DOM.prevMonthBtn) {
        DOM.prevMonthBtn.addEventListener('click', () => {
            currentDate.setMonth(currentDate.getMonth() - 1);
            renderCalendar();
        });
    }

    if (DOM.nextMonthBtn) {
        DOM.nextMonthBtn.addEventListener('click', () => {
            currentDate.setMonth(currentDate.getMonth() + 1);
            renderCalendar();
        });
    }

    //
    if (DOM.diarySubmitBtn) {
        DOM.diarySubmitBtn.addEventListener('click', () => {
            submitDiary();
        });
    }

    //
    if (DOM.diaryInput) {
        DOM.diaryInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                submitDiary();
            }
        });
    }

    //
    if (DOM.extraReplyIcon) {
            let lastExtraReplyClickTime = 0;
            DOM.extraReplyIcon.addEventListener('click', () => {
                const now = Date.now();
                // 3
                if (now - lastExtraReplyClickTime < 3000) {
                    return;
                }
                lastExtraReplyClickTime = now;

                // 1-2
                const messageCount = Math.random() < 0.5 ? 1 : 2;
                let delay = 0;

                for (let i = 0; i < messageCount; i++) {
                    setTimeout(() => {
                        //
                        const reply = appState.replies[Math.floor(Math.random() * appState.replies.length)];
                        //
                        const botMessage = {
                            id: Date.now(),
                            text: reply,
                            role: 'bot',
                            timestamp: new Date().toISOString()
                        };
                        //
                        appState.messages.push(botMessage);
                        renderMessage(botMessage);
                        scrollToBottom();
                        saveToStorage();
                    }, delay);
                    //
                    delay += Math.floor(Math.random() * 600) + 600;
                }
            });
        }
    }

//
function addLongPressSupport() {
    let pressTimer;

    DOM.messagesContainer.addEventListener('mousedown', (e) => {
        if (e.target.closest('.message')) {
            pressTimer = setTimeout(() => {
                handleContextMenu(e);
            }, 500);
        }
    });

    DOM.messagesContainer.addEventListener('mouseup', () => {
        clearTimeout(pressTimer);
    });

    DOM.messagesContainer.addEventListener('mouseleave', () => {
        clearTimeout(pressTimer);
    });

    //
    DOM.messagesContainer.addEventListener('touchstart', (e) => {
        if (e.target.closest('.message')) {
            pressTimer = setTimeout(() => {
                handleContextMenu(e);
            }, 500);
        }
    });

    DOM.messagesContainer.addEventListener('touchend', () => {
        clearTimeout(pressTimer);
    });

    DOM.messagesContainer.addEventListener('touchcancel', () => {
        clearTimeout(pressTimer);
});
}
}

//
function addStickerLongPressSupport() {
    let pressTimer;

    DOM.stickerList.addEventListener('mousedown', (e) => {
        if (e.target.tagName === 'IMG') {
            pressTimer = setTimeout(() => {
                handleStickerLongPress(e);
            }, 500);
        }
    });

    DOM.stickerList.addEventListener('mouseup', () => {
        clearTimeout(pressTimer);
    });

    DOM.stickerList.addEventListener('mouseleave', () => {
        clearTimeout(pressTimer);
    });

    //
    DOM.stickerList.addEventListener('touchstart', (e) => {
        if (e.target.tagName === 'IMG') {
            pressTimer = setTimeout(() => {
                handleStickerLongPress(e);
            }, 500);
        }
    });

    DOM.stickerList.addEventListener('touchend', () => {
        clearTimeout(pressTimer);
    });

    DOM.stickerList.addEventListener('touchcancel', () => {
        clearTimeout(pressTimer);
    });
}

//
function toggleStickerPanel() {
    if (DOM.stickerPanel.style.display === 'flex') {
        DOM.stickerPanel.style.display = 'none';
    } else {
        DOM.stickerPanel.style.display = 'flex';
    }
}

//
function renderStickers() {
    DOM.stickerList.innerHTML = '';

    appState.stickers.forEach((stickerData) => {
        const imgElement = document.createElement('img');
        imgElement.src = stickerData;
        imgElement.alt = '';
        imgElement.style.width = '56px';
        imgElement.style.height = '56px';
        imgElement.style.borderRadius = '8px';
        imgElement.style.margin = '4px';
        imgElement.style.objectFit = 'cover';
        imgElement.style.cursor = 'pointer';
        imgElement.style.transition = 'opacity 0.2s';

        //
        imgElement.addEventListener('mouseenter', () => {
            imgElement.style.opacity = '0.8';
        });

        //
        imgElement.addEventListener('click', () => {
            sendSticker(stickerData);
        });

        //
        let longPressTimer;
        imgElement.addEventListener('mousedown', () => {
            longPressTimer = setTimeout(() => {
                handleStickerLongPress({ target: imgElement });
            }, 500); // 500ms
        });

        //
        imgElement.addEventListener('mouseup', () => {
            clearTimeout(longPressTimer);
        });

        imgElement.addEventListener('mouseleave', () => {
            clearTimeout(longPressTimer);
            imgElement.style.opacity = '1';
        });

        DOM.stickerList.appendChild(imgElement);
    });
}

//
function handleStickerUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    //
    const validTypes = ['image/png', 'image/jpeg', 'image/gif'];
    if (!validTypes.includes(file.type)) {
        alert(' PNG / JPG / GIF ');
        return;
    }

    const reader = new FileReader();

    reader.onload = (e) => {
        try {
            const stickerDataUrl = e.target.result;

            //
            appState.stickers.push(stickerDataUrl);

            //
            saveToStorage();

            //
            renderStickers();

            alert(' ');
        } catch (error) {
            console.error(':', error);
            alert('');
        }
    };

    reader.onerror = () => {
        alert('');
    };

    reader.readAsDataURL(file);
    event.target.value = '';
}

//
function sendSticker(stickerDataUrl) {
    if (appState.isLoading) return;

    //
    window.lastChatTime = Date.now();

    //
    activeCareState.lastUserMessageTime = Date.now();

    //
    const userMessage = {
        id: Date.now(),
        type: 'image',
        content: stickerDataUrl,
        role: 'user',
        timestamp: new Date().toISOString(),
        read: false,
        replyTo: appState.quotedMessage ? appState.quotedMessage.id : null
    };

    //
    appState.messages.push(userMessage);
    renderMessage(userMessage);

    //
    cancelQuote();

    scrollToBottom();
    saveToStorage();

    // 500ms
    setTimeout(() => {
        markAsRead(userMessage.id);
    }, 500);

    //
    simulateBotReply();

    //
    DOM.stickerPanel.style.display = 'none';
}

//
function handleStickerLongPress(event) {
    const imgElement = event.target;
    const stickerDataUrl = imgElement.src;

    if (confirm('')) {
        //
        appState.stickers = appState.stickers.filter(sticker => sticker !== stickerDataUrl);

        //
        saveToStorage();

        //
        renderStickers();
    }
}

//
let currentDate = new Date();
let checkinData = {};
let selectedDate = null;

//
function openCalendar() {
    //
    loadCheckinData();

    //
    renderCalendar();

    //
    selectedDate = new Date();

    //
    renderDiary(selectedDate);

    //
    DOM.calendarModal.style.display = 'flex';
}

//
function closeCalendar() {
    DOM.calendarModal.style.display = 'none';
}

//
function loadCheckinData() {
    try {
        const savedData = localStorage.getItem(CONFIG.STORAGE_KEYS.CHECKIN_DATA);
        checkinData = savedData ? JSON.parse(savedData) : {};
    } catch (error) {
        console.error(':', error);
        checkinData = {};
    }
}

//
function saveCheckinData() {
    try {
        localStorage.setItem(CONFIG.STORAGE_KEYS.CHECKIN_DATA, JSON.stringify(checkinData));
    } catch (error) {
        console.error(':', error);
    }
}

//
function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // YYYY-MM-DD
    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDay = today.getDate();
    const todayDateString = getDateKey(today);

    //
    DOM.currentMonth.textContent = `${year} ${month + 1}`;

    //
    const dayTitles = DOM.calendarGrid.querySelectorAll('.day-title');
    DOM.calendarGrid.innerHTML = '';
    dayTitles.forEach(title => {
        DOM.calendarGrid.appendChild(title);
    });

    //
    const firstDay = new Date(year, month, 1);
    // 01...6
    const firstDayOfWeek = firstDay.getDay();
    // 01...6
    const adjustedFirstDay = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;

    //
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    //
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    //
    const isCurrentMonthToday = (year === todayYear && month === todayMonth);

    //
    for (let i = adjustedFirstDay - 1; i >= 0; i--) {
        const day = daysInPrevMonth - i;
        const date = new Date(year, month - 1, day);
        const dayCell = createDayCell(date, false, isCurrentMonthToday, todayDateString, todayDay);
        dayCell.classList.add('other-month');
        DOM.calendarGrid.appendChild(dayCell);
    }

    //
    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        const dayCell = createDayCell(date, true, isCurrentMonthToday, todayDateString, todayDay);
        DOM.calendarGrid.appendChild(dayCell);
    }

    //
    const totalCells = DOM.calendarGrid.children.length;
    const remainingCells = 42 - totalCells; // 6  7 = 42
    for (let day = 1; day <= remainingCells; day++) {
        const date = new Date(year, month + 1, day);
        const dayCell = createDayCell(date, false, isCurrentMonthToday, todayDateString, todayDay);
        dayCell.classList.add('other-month');
        DOM.calendarGrid.appendChild(dayCell);
    }

    //
    updateCheckinStats();
}

//
function createDayCell(date, isCurrentMonth, isCurrentMonthToday, todayDateString, todayDay) {
    const dayCell = document.createElement('div');
    dayCell.className = 'day-cell';

    const day = date.getDate();
    dayCell.textContent = day;

    //
    const currentDateString = getDateKey(date);
    const currentTime = new Date();
    const today = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate());

    //
    const isToday = (currentDateString === todayDateString);
    const isPastDate = date < today;
    const isFutureDate = date > today;

    //
    const dateKey = getDateKey(date);
    const isChecked = !!checkinData[dateKey];

    //
    if (isToday) {
        //
        dayCell.classList.add('today');
        if (isChecked) {
            dayCell.classList.add('checked');
        }
    } else if (isPastDate && isChecked) {
        //
        dayCell.classList.add('past-checked');
    } else if (isPastDate && !isChecked) {
        //
        dayCell.classList.add('disabled');
    } else if (isFutureDate) {
        //
        dayCell.classList.add('disabled');
    }

    //
    if (isCurrentMonth && (isToday || (isPastDate && isChecked))) {
        //
        dayCell.addEventListener('click', () => {
            //
            selectedDate = date;
            //
            renderDiary(selectedDate);
        });
    }

    return dayCell;
}

// YYYY-MM-DD
function getDateKey(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

//
function renderDiary(date) {
    const dateKey = getDateKey(date);
    const dayData = checkinData[dateKey];

    //
    DOM.diaryList.innerHTML = '';

    if (dayData && dayData.notes && dayData.notes.length > 0) {
        //
        dayData.notes.forEach(note => {
            const diaryItem = document.createElement('div');
            diaryItem.className = 'diary-item';

            const timeSpan = document.createElement('span');
            timeSpan.className = 'diary-time';
            timeSpan.textContent = note.time;

            const contentSpan = document.createElement('span');
            contentSpan.className = 'diary-content';
            contentSpan.textContent = note.content;

            diaryItem.appendChild(timeSpan);
            diaryItem.appendChild(contentSpan);
            DOM.diaryList.appendChild(diaryItem);
        });
    }

    //
    DOM.diaryInput.value = '';
}

//
function submitDiary() {
    const content = DOM.diaryInput.value.trim();
    if (!content || !selectedDate) {
        return;
    }

    const dateKey = getDateKey(selectedDate);
    const now = new Date();
    const timeStr = now.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });

    //
    const note = {
        time: timeStr,
        content: content,
        timestamp: now.getTime()
    };

    //
    let isFirstCheckinToday = !checkinData[dateKey];
    if (isFirstCheckinToday) {
        //
        checkinData[dateKey] = {
            notes: [note]
        };
    } else {
        //
        if (!checkinData[dateKey].notes) {
            checkinData[dateKey].notes = [];
        }
        checkinData[dateKey].notes.push(note);
    }

    //
    saveCheckinData();

    //
    updateCheckinStats();

    //
    renderCalendar();
    renderDiary(selectedDate);

    //
    if (isFirstCheckinToday) {
        const today = new Date();
        if (date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()) {

            //  +5
            addIntimacyPoints(5, '');

            //
            const streak = parseInt(DOM.streakCount.textContent);
            //  >=1 +5
            if (streak >= 1) {
                addIntimacyPoints(5, '');
            }
        }
    }
}

//
function updateCheckinStats() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    //
    let monthlyCount = 0;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    for (let day = 1; day <= daysInMonth; day++) {
        const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        if (checkinData[dateKey]) {
            monthlyCount++;
        }
    }
    DOM.checkinCount.textContent = monthlyCount;

    //
    let streak = 0;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    //
    const checkDate = new Date(today);
    while (true) {
        const dateKey = getDateKey(checkDate);
        if (checkinData[dateKey]) {
            streak++;
            checkDate.setDate(checkDate.getDate() - 1);
        } else {
            break;
        }
    }
    DOM.streakCount.textContent = streak;
}

//
function handleContextMenu(e) {
    e.preventDefault();

    const messageElement = e.target.closest('.message');
    if (!messageElement) return;

    const messageId = parseInt(messageElement.dataset.id);
    const message = appState.messages.find(msg => msg.id === messageId);
    if (!message) return;

    //
    appState.quotedMessage = message;

    //
    const rect = messageElement.getBoundingClientRect();
    const containerRect = DOM.messagesContainer.getBoundingClientRect();

    DOM.contextMenu.style.display = 'block';
    DOM.contextMenu.style.left = `${e.clientX - containerRect.left}px`;
    DOM.contextMenu.style.top = `${e.clientY - containerRect.top}px`;
}

//
function quoteSelectedMessage() {
    if (!appState.quotedMessage) return;

    //
    const previewText = appState.quotedMessage.text.substring(0, 20) + (appState.quotedMessage.text.length > 20 ? '...' : '');
    DOM.quoteContent.textContent = previewText;
    DOM.quotePreview.style.display = 'flex';

    //
    DOM.contextMenu.style.display = 'none';

    //
    DOM.messageInput.focus();
}

//
function cancelQuote() {
    appState.quotedMessage = null;
    DOM.quotePreview.style.display = 'none';
    DOM.quoteContent.textContent = '';
}

//
function checkChatDiaryReminder() {
    //
    let lastRecordDate = null;

    for (let dateStr in dailyNotes) {
        const note = dailyNotes[dateStr];
        if (note && (note.food || note.workout || note.letter)) {
            const recordDate = new Date(dateStr);
            if (!lastRecordDate || recordDate > lastRecordDate) {
                lastRecordDate = recordDate;
            }
        }
    }

    if (!lastRecordDate) return;

    const now = new Date();
    const gap = Math.floor((now - lastRecordDate) / 86400000);

    // 2  20%
    if (gap >= 2 && chance(0.20)) {
        aoyinChatRemind("");
    }
}

//
function aoyinChatRemind(text) {
    //
    const now = Date.now();
    const timeSinceLast = now - appState.lastAutoMessageTime;

    // 345
    if (appState.autoMessageCount >= 3 || timeSinceLast < 45000) {
        return;
    }

    //
    const botMessage = {
        id: Date.now(),
        text: text,
        role: 'bot',
        timestamp: new Date().toISOString(),
        read: true,
        replyTo: null
    };

    //
    appState.messages.push(botMessage);
    renderMessage(botMessage);

    scrollToBottom();
    saveToStorage();

    //
    appState.autoMessageCount++;
    appState.lastAutoMessageTime = now;
}

//
function sendMessage() {
    const messageText = DOM.messageInput.value.trim();

    if (!messageText || appState.isLoading) {
        return;
    }

    //
    window.lastChatTime = Date.now();

    //
    activeCareState.lastUserMessageTime = Date.now();

    //
    const userMessage = {
        id: Date.now(),
        text: messageText,
        role: 'user',
        timestamp: new Date().toISOString(),
        read: false,
        replyTo: appState.quotedMessage ? appState.quotedMessage.id : null
    };

    //
    appState.messages.push(userMessage);
    renderMessage(userMessage);

    //
    DOM.messageInput.value = '';
    cancelQuote();

    scrollToBottom();
    saveToStorage();

    // 500ms
    setTimeout(() => {
        markAsRead(userMessage.id);
    }, 500);

    //
    let points = 0;

    // 1.  +1
    points += 1;

    // 2. 10 +1
    if (messageText.length > 10) {
        points += 1;
    }

    // 3.  +2
    const intimateWords = ['', '', '', '', '', '', '', '', ''];
    if (intimateWords.some(word => messageText.includes(word))) {
        points += 2;
    }

    // 4.  +1
    //
    const hasImage = /<img/.test(messageText);
    const hasEmoji = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u.test(messageText);
    if (hasImage || hasEmoji) {
        points += 1;
    }

    //
    addIntimacyPoints(points, '');

    //
    simulateBotReply();
}

//
function simulateBotReply() {
    appState.isLoading = true;

    //
    const loadingElement = createLoadingElement();
    DOM.messagesContainer.appendChild(loadingElement);
    scrollToBottom();

    //  1-2
    const delay = Math.random() * 1000 + 1000;

    setTimeout(() => {
        //
        loadingElement.remove();

        //
        let shouldInsertAction = Math.random() < CONFIG.ACTION_REPLY_CHANCE;

        if (shouldInsertAction) {
            //
            const actionReply = CONFIG.ACTION_REPLIES[Math.floor(Math.random() * CONFIG.ACTION_REPLIES.length)];
            const actionMessage = {
                id: Date.now(),
                text: actionReply,
                role: 'bot',
                timestamp: new Date().toISOString(),
                isAction: true
            };

            appState.messages.push(actionMessage);
            renderMessage(actionMessage);
            scrollToBottom();
            saveToStorage();

            //
            setTimeout(() => {
                sendNormalReply();
            }, 500);
        } else {
            //
            sendNormalReply();
        }

        appState.isLoading = false;
    }, delay);
}

//
function sendNormalReply() {
    //
    const useSticker = appState.stickers.length > 0 && Math.random() < 0.3; // 30%

    if (useSticker) {
        //
        const randomSticker = appState.stickers[Math.floor(Math.random() * appState.stickers.length)];

        //
        const botMessage = {
            id: Date.now(),
            type: 'image',
            content: randomSticker,
            role: 'bot',
            timestamp: new Date().toISOString()
        };

        //
        appState.messages.push(botMessage);
        renderMessage(botMessage);
        scrollToBottom();
        saveToStorage();
    } else {
        //
        const randomReply = appState.replies[Math.floor(Math.random() * appState.replies.length)];

        //
        const botMessage = {
            id: Date.now(),
            text: randomReply,
            role: 'bot',
            timestamp: new Date().toISOString()
        };

        //
        appState.messages.push(botMessage);
        renderMessage(botMessage);
        scrollToBottom();
        saveToStorage();
    }
}

//
function triggerPatPat() {
    //
    if (navigator.vibrate) {
        navigator.vibrate(100);
    }

    //
    const systemMessage = {
        id: Date.now(),
        text: " ",
        role: 'system',
        timestamp: new Date().toISOString()
    };

    //
    appState.messages.push(systemMessage);
    renderMessage(systemMessage);
    scrollToBottom();

    //
    setTimeout(() => {
        //
        const useSticker = appState.stickers.length > 0 && Math.random() < 0.3; // 30%

        if (useSticker) {
            //
            const randomSticker = appState.stickers[Math.floor(Math.random() * appState.stickers.length)];

            //
            const botMessage = {
                id: Date.now(),
                type: 'image',
                content: randomSticker,
                role: 'bot',
                timestamp: new Date().toISOString()
            };

            //
            appState.messages.push(botMessage);
            renderMessage(botMessage);
            scrollToBottom();
            saveToStorage();
        } else {
            //
            const randomReply = appState.replies[Math.floor(Math.random() * appState.replies.length)];

            //
            const botMessage = {
                id: Date.now(),
                text: randomReply,
                role: 'bot',
                timestamp: new Date().toISOString()
            };

            //
            appState.messages.push(botMessage);
            renderMessage(botMessage);
            scrollToBottom();
            saveToStorage();
        }
    }, 500);
}

//
function markAsRead(messageId) {
    const message = appState.messages.find(msg => msg.id === messageId);
    if (message) {
        message.read = true;
        saveToStorage();

        //
        const messageElement = DOM.messagesContainer.querySelector(`[data-id="${messageId}"]`);
        if (messageElement) {
            const footerElement = messageElement.querySelector('.message-footer');
            if (footerElement) {
                let readStatusElement = footerElement.querySelector('.read-status');
                if (!readStatusElement) {
                    readStatusElement = document.createElement('span');
                    readStatusElement.className = 'read-status';
                    footerElement.appendChild(readStatusElement);
                }
                readStatusElement.textContent = '';
            }
        }
    }
}

//
function createLoadingElement() {
    const messageElement = document.createElement('div');
    messageElement.className = 'message bot';
    messageElement.dataset.id = Date.now();

    //
    const avatarElement = document.createElement('div');
    avatarElement.className = 'avatar';

    //
    const avatarData = appState.avatars.bot;
    const avatarText = '';

    if (avatarData) {
        //
        const imgElement = document.createElement('img');
        imgElement.src = avatarData;
        imgElement.alt = avatarText;
        imgElement.style.width = '100%';
        imgElement.style.height = '100%';
        imgElement.style.objectFit = 'cover';
        avatarElement.appendChild(imgElement);
    } else {
        //
        avatarElement.textContent = avatarText;
    }

    //
    const contentElement = document.createElement('div');
    contentElement.className = 'message-content';

    //
    const bubbleElement = document.createElement('div');
    bubbleElement.className = 'message-bubble';

    //
    const loadingElement = document.createElement('div');
    loadingElement.className = 'loading';

    for (let i = 0; i < 3; i++) {
        const dot = document.createElement('div');
        dot.className = 'loading-dot';
        loadingElement.appendChild(dot);
    }

    bubbleElement.appendChild(loadingElement);
    contentElement.appendChild(bubbleElement);
    messageElement.appendChild(avatarElement);
    messageElement.appendChild(contentElement);

    return messageElement;
}

//
function renderMessages() {
    DOM.messagesContainer.innerHTML = '';

    appState.messages.forEach(message => {
        renderMessage(message);
    });

    scrollToBottom();
}

//
function renderMessage(message) {
    //
    if (message.role === 'system') {
        const messageElement = document.createElement('div');
        messageElement.className = 'system-message';
        messageElement.innerHTML = message.text;
        messageElement.dataset.id = message.id;
        DOM.messagesContainer.appendChild(messageElement);
        return;
    }

    const messageElement = document.createElement('div');
    messageElement.className = `message ${message.role}`;
    messageElement.dataset.id = message.id;

    //
    const avatarElement = document.createElement('div');
    // id
    avatarElement.className = 'avatar';
    if (!message.isUser) {
        avatarElement.id = 'aoAvatar';
    }

    //
    const isUser = message.role === 'user';
    const avatarData = isUser ? appState.avatars.my : appState.avatars.bot;
    const avatarText = isUser ? '' : '';

    if (avatarData) {
        //
        const imgElement = document.createElement('img');
        imgElement.src = avatarData;
        imgElement.alt = avatarText;
        imgElement.style.width = '100%';
        imgElement.style.height = '100%';
        imgElement.style.objectFit = 'cover';
        avatarElement.appendChild(imgElement);
    } else {
        //
        avatarElement.textContent = avatarText;
    }

    //
    const contentElement = document.createElement('div');
    contentElement.className = 'message-content';

    //
    if (message.isAction) {
        const actionElement = document.createElement('div');
        actionElement.className = 'action-reply';
        actionElement.textContent = message.text;
        contentElement.appendChild(actionElement);
    } else {
        //
        if (message.replyTo) {
            const quotedMsg = appState.messages.find(msg => msg.id === message.replyTo);
            if (quotedMsg) {
                const quoteElement = document.createElement('div');
                quoteElement.className = 'quote';
                quoteElement.textContent = quotedMsg.text || (quotedMsg.type === 'image' ? '[]' : '');
                contentElement.appendChild(quoteElement);
            }
        }

        //
        const bubbleElement = document.createElement('div');
        bubbleElement.className = 'message-bubble';

        //
        if (message.type === 'image') {
            const imgElement = document.createElement('img');
            imgElement.className = 'msg-image';
            imgElement.src = message.content;
            imgElement.alt = '';
            imgElement.style.maxWidth = '200px';
            imgElement.style.maxHeight = '200px';
            imgElement.style.borderRadius = '8px';
            imgElement.style.objectFit = 'cover';
            bubbleElement.appendChild(imgElement);
        } else {
            //
            bubbleElement.textContent = message.text;
        }

        //
        const footerElement = document.createElement('div');
        footerElement.className = 'message-footer';

        const timeElement = document.createElement('span');
        timeElement.className = 'message-time';
        timeElement.textContent = formatTime(message.timestamp);
        footerElement.appendChild(timeElement);

        //
        if (isUser) {
            const readStatusElement = document.createElement('span');
            readStatusElement.className = 'read-status';
            readStatusElement.textContent = message.read ? '' : '';
            footerElement.appendChild(readStatusElement);
        }

        bubbleElement.appendChild(footerElement);
        contentElement.appendChild(bubbleElement);
    }

    //
    if (isUser) {
        messageElement.appendChild(contentElement);
        messageElement.appendChild(avatarElement);
    } else {
        messageElement.appendChild(avatarElement);
        messageElement.appendChild(contentElement);
    }

    DOM.messagesContainer.appendChild(messageElement);
}

//
function formatTime(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
}

//
function scrollToBottom() {
    DOM.chatContent.scrollTop = DOM.chatContent.scrollHeight;
}

//
function updateFontSize(size) {
    document.documentElement.style.setProperty("--dynamic-font-size", size + "px");
    document.getElementById("fontSizeValue").innerText = size + "px";

    //  localStorage
    localStorage.setItem("dynamicFontSize", size);
}

//
window.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("dynamicFontSize");
    if (saved) {
        document.documentElement.style.setProperty("--dynamic-font-size", saved + "px");

        const slider = document.getElementById("fontSizeSlider");
        const valueText = document.getElementById("fontSizeValue");

        if (slider) slider.value = saved;
        if (valueText) valueText.innerText = saved + "px";
    }
});

//
function initSettingsPanel() {
    //
    const themeOptions = document.querySelectorAll('[data-theme]');
    themeOptions.forEach(option => {
        option.addEventListener('click', () => {
            const theme = option.dataset.theme;
            appState.settings.theme = theme;

            //
            themeOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');

            //
            applySettings();
            saveSettings();
        });
    });

    //
    document.querySelector(`[data-theme="${appState.settings.theme}"]`).classList.add('active');
}

//
function saveSettings() {
    localStorage.setItem(CONFIG.STORAGE_KEYS.SETTINGS, JSON.stringify(appState.settings));
}

//
function handleBgUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
        try {
            const bgDataUrl = e.target.result;
            //
            document.documentElement.style.setProperty('--background-image', `url(${bgDataUrl})`);
            //
            localStorage.setItem(CONFIG.STORAGE_KEYS.BACKGROUND_IMAGE, bgDataUrl);
        } catch (error) {
            console.error(':', error);
            alert('');
        }
    };

    reader.onerror = () => {
        alert('');
    };

    reader.readAsDataURL(file);
    event.target.value = '';
}

//
function resetBackground() {
    document.documentElement.style.setProperty('--background-image', 'none');
    localStorage.removeItem(CONFIG.STORAGE_KEYS.BACKGROUND_IMAGE);
}

//
function handleAvatarUpload(event, type) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
        try {
            const avatarDataUrl = e.target.result;
            appState.avatars[type] = avatarDataUrl;

            //
            localStorage.setItem(type === 'my' ? CONFIG.STORAGE_KEYS.MY_AVATAR : CONFIG.STORAGE_KEYS.BOT_AVATAR, avatarDataUrl);

            //
            renderMessages();

            alert(` ${type === 'my' ? '' : ''}`);
        } catch (error) {
            console.error(':', error);
            alert('');
        }
    };

    reader.onerror = () => {
        alert('');
    };

    reader.readAsDataURL(file);
    event.target.value = '';
}

//
function resetAvatars() {
    //
    appState.avatars = {
        my: null,
        bot: null
    };

    //
    localStorage.removeItem(CONFIG.STORAGE_KEYS.MY_AVATAR);
    localStorage.removeItem(CONFIG.STORAGE_KEYS.BOT_AVATAR);

    //
    renderMessages();

    alert(' ');
}

//
function handleChatImport(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
        try {
            const jsonData = JSON.parse(e.target.result);

            if (jsonData.messages && Array.isArray(jsonData.messages)) {
                //
                if (confirm('\n\n\n')) {
                    appState.messages = jsonData.messages;
                } else {
                    appState.messages = [...appState.messages, ...jsonData.messages];
                }

                //
                renderMessages();
                saveToStorage();
                alert('');
            } else {
                alert('JSON  messages ');
            }
        } catch (error) {
            console.error(' JSON :', error);
            alert('');
        }
    };

    reader.onerror = () => {
        alert('');
    };

    reader.readAsText(file);
    event.target.value = '';
}

//
function exportChatHistory() {
    if (appState.messages.length === 0) {
        alert('');
        return;
    }

    const exportData = {
        messages: appState.messages,
        exportTime: new Date().toISOString(),
        version: '1.0'
    };

    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });

    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(dataBlob);
    downloadLink.download = `chat-history-${new Date().toISOString().split('T')[0]}.json`;

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

//
function handleRepliesImport(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
        try {
            const jsonData = JSON.parse(e.target.result);

            //  customReplies  replies
            let newReplies = [];
            if (jsonData.customReplies && Array.isArray(jsonData.customReplies)) {
                newReplies = jsonData.customReplies;
            } else if (jsonData.replies && Array.isArray(jsonData.replies)) {
                newReplies = jsonData.replies;
            }

            if (newReplies.length > 0) {
                appState.replies = newReplies;
                saveToStorage();
                alert('');
            } else {
                alert('JSON  customReplies  replies ');
            }
        } catch (error) {
            console.error(' JSON :', error);
            alert('');
        }
    };

    reader.onerror = () => {
        alert('');
    };

    reader.readAsText(file);
    event.target.value = '';
}




//
function showIntimacyModal() {
    if (!DOM.intimacyModal) return;

    // 1.
    const now = Date.now();
    const start = appState.startDate || now;
    const diffTime = Math.abs(now - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // 2.
    const totalCount = appState.messages.length;
    let todayCount = 0;
    const todayStr = new Date().toISOString().split('T')[0];

    appState.messages.forEach(msg => {
        if (msg.role === 'user' && msg.timestamp.startsWith(todayStr)) {
            todayCount++;
        }
    });

    // 3.
    const currentPoints = appState.intimacy.totalPoints;
    const currentLevel = appState.intimacy.level;
    const nextLevelDiff = 20 - (currentPoints % 20);

    // 4.  DOM
    const elementsToUpdate = [
        { id: 'loveDays', value: diffDays },
        { id: 'modalLevel', value: currentLevel },
        { id: 'modalCurrentPoints', value: currentPoints },
        { id: 'modalNextLevelDiff', value: nextLevelDiff },
        { id: 'modalTodayCount', value: todayCount },
        { id: 'modalTotalCount', value: totalCount }
    ];

    elementsToUpdate.forEach(item => {
        const el = document.getElementById(item.id);
        if (el) {
            el.innerText = item.value;
            //
            el.classList.remove('highlight-trigger');
            void el.offsetWidth; //
            el.classList.add('highlight-trigger');
        }
    });

    // 5.
    DOM.intimacyModal.style.display = 'flex';

    // 6.
    const banner = document.getElementById('intimacyBanner');
    const symbol = banner.querySelector('.default-symbol');
    const customBanner = localStorage.getItem('customIntimacyBanner');

    if (customBanner) {
        banner.style.backgroundImage = `url(${customBanner})`;
        if (symbol) symbol.style.display = 'none';
    } else {
        banner.style.backgroundImage = 'none';
        if (symbol) symbol.style.display = 'block';
    }
}

//
function closeIntimacyModal() {
    if (DOM.intimacyModal) {
        DOM.intimacyModal.style.display = 'none';
        //  banner
    }
}

//  ( / )
function initBannerInteractions() {
    const banner = document.getElementById('intimacyBanner');
    const fileInput = document.getElementById('bannerUpload_New');
    let pressTimer;

    if (!banner || !fileInput) return;

    //
    banner.addEventListener('mousedown', () => {
        pressTimer = setTimeout(() => {
            fileInput.click();
        }, 800);
    });

    banner.addEventListener('touchstart', () => {
        pressTimer = setTimeout(() => {
            fileInput.click();
        }, 800);
    }, { passive: true });

    //  ()
    const clearTimer = () => clearTimeout(pressTimer);

    banner.addEventListener('mouseup', clearTimer);
    banner.addEventListener('mouseleave', clearTimer);
    banner.addEventListener('touchend', clearTimer);
    banner.addEventListener('touchmove', clearTimer, { passive: true });

    //
    banner.addEventListener('dblclick', () => {
        if (localStorage.getItem('customIntimacyBanner')) {
            if (confirm('')) {
                localStorage.removeItem('customIntimacyBanner');
                banner.style.backgroundImage = 'none';
                const symbol = banner.querySelector('.default-symbol');
                if (symbol) symbol.style.display = 'block';
            }
        }
    });

    //
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // JS  (User Request #2)
        if (!file.type.startsWith('image/')) {
            alert(' ');
            return;
        }

        //  Canvas  (User Request #3)
        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                //
                const MAX_WIDTH = 1280;
                let width = img.width;
                let height = img.height;

                if (width > MAX_WIDTH) {
                    height = (height * MAX_WIDTH) / width;
                    width = MAX_WIDTH;
                }

                canvas.width = width;
                canvas.height = height;
                ctx.drawImage(img, 0, 0, width, height);

                //
                const format = file.type.includes("png") ? "image/png" : "image/jpeg";
                //  0.8
                const dataUrl = canvas.toDataURL(format, 0.8);

                // UI
                try {
                    localStorage.setItem('customIntimacyBanner', dataUrl);

                    const symbol = banner.querySelector('.default-symbol');
                    banner.style.backgroundImage = `url(${dataUrl})`;
                    if (symbol) symbol.style.display = 'none';
                } catch (err) {
                    alert('');
                    console.error('Storage failed:', err);
                }
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(file);
    });
}

//
console.log('App Version: v8 (New ID + Accept *)');

//
initApp();
//  ( DOM )
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBannerInteractions);
} else {
    initBannerInteractions();
}// ========================================
//
// ========================================

//
let replyLibraryState = {
    currentTab: 'custom', // 'custom' or 'system'
    searchKeyword: ''
};

// DOM
const replyLibraryDOM = {
    modal: null,
    closeBtn: null,
    closeBtn2: null,
    tabs: null,
    searchInput: null,
    importBtn: null,
    exportBtn: null,
    replyList: null,
    addBtn: null
};

//  DOM
function initReplyLibraryDOM() {
    replyLibraryDOM.modal = document.getElementById('replyLibraryModal');
    replyLibraryDOM.closeBtn = document.getElementById('closeReplyModalBtn');
    replyLibraryDOM.closeBtn2 = document.getElementById('closeReplyModalBtn2');
    replyLibraryDOM.tabs = document.querySelectorAll('.reply-tab');
    replyLibraryDOM.searchInput = document.getElementById('replySearchInput');
    replyLibraryDOM.importBtn = document.getElementById('importRepliesInModal');
    replyLibraryDOM.exportBtn = document.getElementById('exportRepliesBtn');
    replyLibraryDOM.replyList = document.getElementById('replyList');
    replyLibraryDOM.addBtn = document.getElementById('addReplyBtn');
}

//
function openReplyLibraryModal() {
    if (!replyLibraryDOM.modal) initReplyLibraryDOM();

    replyLibraryDOM.modal.style.display = 'flex';
    replyLibraryState.searchKeyword = '';
    if (replyLibraryDOM.searchInput) {
        replyLibraryDOM.searchInput.value = '';
    }
    renderReplyList();
}

//
function closeReplyLibraryModal() {
    if (replyLibraryDOM.modal) {
        replyLibraryDOM.modal.style.display = 'none';
    }
}

//
function switchReplyTab(tabName) {
    replyLibraryState.currentTab = tabName;

    //
    replyLibraryDOM.tabs.forEach(tab => {
        if (tab.dataset.tab === tabName) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    //
    renderReplyList();
}

//
function renderReplyList() {
    if (!replyLibraryDOM.replyList) return;

    const currentReplies = getCurrentReplies();
    const filteredReplies = filterReplies(currentReplies, replyLibraryState.searchKeyword);

    if (filteredReplies.length === 0) {
        replyLibraryDOM.replyList.innerHTML = `
            <div class="reply-empty">
            ${replyLibraryState.searchKeyword ? '' : ','}
            </div>
        `;
        return;
    }

    replyLibraryDOM.replyList.innerHTML = filteredReplies.map((reply, index) => `
        <div class="reply-item" data-index="${index}">
            <div class="reply-text">${escapeHtml(reply)}</div>
            <div class="reply-actions">
                    <button class="reply-action-btn edit" onclick="editReply(${index})" title=""></button>
                    <button class="reply-action-btn delete" onclick="deleteReply(${index})" title=""></button>
            </div>
        </div>
    `).join('');
}

//
function getCurrentReplies() {
    if (replyLibraryState.currentTab === 'custom') {
        return appState.replies || [];
    } else {
        //  CONFIG.DEFAULT_REPLIES
        return CONFIG.DEFAULT_REPLIES || [];
    }
}

//
function filterReplies(replies, keyword) {
    if (!keyword) return replies;
    const lowerKeyword = keyword.toLowerCase();
    return replies.filter(reply =>
        reply.toLowerCase().includes(lowerKeyword)
    );
}

//
function addReply() {
    const text = prompt('');
    if (!text || !text.trim()) return;

    const trimmedText = text.trim();

    if (replyLibraryState.currentTab === 'custom') {
        if (!appState.replies) {
            appState.replies = [];
        }
        appState.replies.push(trimmedText);
        saveToStorage();
        renderReplyList();
    } else {
        alert(',""');
    }
}

//
function editReply(index) {
    const currentReplies = getCurrentReplies();
    const filteredReplies = filterReplies(currentReplies, replyLibraryState.searchKeyword);

    if (index < 0 || index >= filteredReplies.length) return;

    const oldText = filteredReplies[index];
    const newText = prompt(':', oldText);

    if (newText === null || newText.trim() === '') return;

    const trimmedText = newText.trim();

    if (replyLibraryState.currentTab === 'custom') {
        //
        const originalIndex = appState.replies.indexOf(oldText);
        if (originalIndex !== -1) {
            appState.replies[originalIndex] = trimmedText;
            saveToStorage();
            renderReplyList();
        }
    } else {
        alert('');
    }
}

//
function deleteReply(index) {
    const currentReplies = getCurrentReplies();
    const filteredReplies = filterReplies(currentReplies, replyLibraryState.searchKeyword);

    if (index < 0 || index >= filteredReplies.length) return;

    const textToDelete = filteredReplies[index];

    if (!confirm(`\n\n"${textToDelete}"`)) return;

    if (replyLibraryState.currentTab === 'custom') {
        //
        const originalIndex = appState.replies.indexOf(textToDelete);
        if (originalIndex !== -1) {
            appState.replies.splice(originalIndex, 1);
            saveToStorage();
            renderReplyList();
        }
    } else {
        alert('');
    }
}

//
function handleReplySearch(keyword) {
    replyLibraryState.searchKeyword = keyword;
    renderReplyList();
}

//
function exportReplyLibrary() {
    const data = {
        customReplies: appState.replies || [],
        systemReplies: CONFIG.DEFAULT_REPLIES || [],
        exportDate: new Date().toISOString()
    };

    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `reply_library_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

//
function importReplyLibrary() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';

    input.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const data = JSON.parse(event.target.result);

                //
                let newReplies = [];
                if (data.customReplies && Array.isArray(data.customReplies)) {
                    newReplies = data.customReplies;
                } else if (data.replies && Array.isArray(data.replies)) {
                    newReplies = data.replies;
                } else if (Array.isArray(data)) {
                    newReplies = data;
                }

                if (newReplies.length > 0) {
                    //
                    if (!appState.replies) {
                        appState.replies = [];
                    }

                    //
                    newReplies.forEach(reply => {
                        if (!appState.replies.includes(reply)) {
                            appState.replies.push(reply);
                        }
                    });

                    saveToStorage();
                    renderReplyList();
                    alert(` ${newReplies.length} `);
                } else {
                    alert('JSON ');
                }
            } catch (error) {
                console.error(':', error);
                alert(',');
            }
        };
        reader.readAsText(file);
    };

    input.click();
}

// HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

//
function bindReplyLibraryEvents() {
    if (!replyLibraryDOM.modal) initReplyLibraryDOM();

    //
    if (replyLibraryDOM.closeBtn) {
        replyLibraryDOM.closeBtn.addEventListener('click', closeReplyLibraryModal);
    }
    if (replyLibraryDOM.closeBtn2) {
        replyLibraryDOM.closeBtn2.addEventListener('click', closeReplyLibraryModal);
    }

    //
    replyLibraryDOM.tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            switchReplyTab(tab.dataset.tab);
        });
    });

    //
    if (replyLibraryDOM.searchInput) {
        replyLibraryDOM.searchInput.addEventListener('input', (e) => {
            handleReplySearch(e.target.value);
        });
    }

    // /
    if (replyLibraryDOM.importBtn) {
        replyLibraryDOM.importBtn.addEventListener('click', importReplyLibrary);
    }
    if (replyLibraryDOM.exportBtn) {
        replyLibraryDOM.exportBtn.addEventListener('click', exportReplyLibrary);
    }

    //
    if (replyLibraryDOM.addBtn) {
        replyLibraryDOM.addBtn.addEventListener('click', addReply);
    }

    //
    if (replyLibraryDOM.modal) {
        replyLibraryDOM.modal.addEventListener('click', (e) => {
            if (e.target === replyLibraryDOM.modal) {
                closeReplyLibraryModal();
            }
        });
    }
}


//
document.addEventListener('DOMContentLoaded', function () {
    //
    bindReplyLibraryEvents();

    //
    const manageRepliesBtn = document.getElementById('manageRepliesBtn');
    if (manageRepliesBtn) {
        manageRepliesBtn.addEventListener('click', openReplyLibraryModal);
    }
});


//
const exportRepliesBtn = document.getElementById('exportRepliesBtn');
if (exportRepliesBtn) {
    exportRepliesBtn.addEventListener('click', exportReplyLibrary);
}
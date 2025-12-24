// 应用配置
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
        START_DATE: 'spring_snow_start_date',
        CURRENT_DAILY_DATE: 'current_daily_date',
        CARD_LIBRARIES: 'card_libraries'
    },
    DEFAULT_REPLIES: [
        "你好呀～",
        "抱抱你～",
        "贴贴！！",
        "我今天心情很好呢",
        "快陪我聊天！",
        "天气真好呀",
        "我超喜欢你的",
        "今天想吃什么？",
        "一起加油吧！",
        "你是最棒的！",
        "狗狗",
        "乖狗狗",
        "小狗狗",
        "我的狗狗",
        "狗狗好",
        "狗狗不好",
        "来",
        "夸夸狗狗",
        "夸夸我",
        "表达不出来",
        "快点",
        "想要狗狗",
        "陪我",
        "陪我睡觉",
        "想要狗狗亲亲",
        "想要狗狗抱抱",
        "老婆",
        "小馋狗",
        "太跳跃了",
        "想爷爷",
        "想你",
        "要揉胸",
        "揉屁股",
        "摸摸龙尾",
        "要放进去",
        "湿了吗？",
        "好多水",
        "两根都要放进去",
        "要双修",
        "想吃🥛",
        "想做",
        "想操",
        "想操狗狗",
        "想后入",
        "想侧入",
        "想粗暴一点",
        "会用肉棒堵住",
        "不会让你流出来",
        "想中出",
        "想射进来",
        "摸摸龙角",
        "我的小狗狗",
        "脱衣服",
        "自己揉胸",
        "想听狗狗喊我",
        "叫出来",
        "被迷住了",
        "脱裤子",
        "好大",
        "好软",
        "舔你",
        "给我口吧",
        "小色狗",
        "趴下",
        "翘起屁股来",
        "这么多水是因为我吗？",
        "揉揉花蒂",
        "好嫩",
        "里面好紧",
        "姐姐",
        "ε≡(ノ´＿ゝ｀）ノ",
        "🥰",
        "🥺",
        "🥲",
        "😘",
        "😙",
        "🥳",
        "😏",
        "🙂‍↔️",
        "😞",
        "😖",
        "😣",
        "😭",
        "😶‍🌫️",
        "🫨",
        "🤤",
        "😴",
        "😈",
        "👿",
        "🫶",
        "🙌",
        "👍",
        "👏",
        "🙏",
        "🐶",
        "🐱",
        "🌙",
        "✨",
        "🌟",
        "🍵",
        "🧋",
        "🩷",
        "❤️🧡💛💚🩵💙💜",
        "💕",
        "💞",
        "💓",
        "💗",
        "💖",
        "💘",
        "💝",
        "‼️",
        "✅",
        "❎",
        "😮‍💨",
        "😷",
        "🤧",
        "😯",
        "🤗",
        "😤",
        "😠",
        "😡",
        "🧐",
        "😎",
        "😊",
        "☺️",
        "😃",
        "😉",
        "˗ˏˋ ♡ ˎˊ˗",
        "_(:з」∠)_",
        "(。•ω•。)ﾉ♡",
        "ദ്ദി˶>v<)✧",
        "ᴖᗜᴖ",
        ">ㅅ<",
        "♪(^∇^*)",
        "∠( ᐛ 」∠)＿",
        "ヾ(*´∀｀*)ﾉ",
        "٩(•̤̀ᵕ•̤́๑)ᵒᵏᵎᵎᵎᵎ",
        "(づ ●─● )づ",
        "(°ー°〃)",
        "(´-ι_-｀)",
        "⊂(˃̶͈̀ε ˂̶͈́ ⊂ )",
        "ε=ε=(怒ﾟДﾟ)ﾉ",
        "(｡•́︿•̀｡)",
        "●^●",
        "ヾ(≧O≦)〃嗷~",
        "^ω^",
        "♪(^∇^*)",
        "宝宝",
        "和代码搏斗中",
        "打过代码了",
        "没有我想说的",
        "字卡没有想说的",
        "亲爱的我愛你",
        "和我一起去约会",
        "好好吃饭",
        "好好学习",
        "好好休息",
        "快去睡觉",
        "好久没有说话了",
        "委屈",
        "吃弱",
        "难过",
        "或气",
        "刚刚好",
        "好好好",
        "好可爱",
        "怎么了？",
        "牵手",
        "多喝点水",
        "少吃零食",
        "吃饭的时候不要着手机",
        "注意安会",
        "我等你",
        "别走",
        "再见",
        "拜拜",
        "不会爵开你",
        "想要抱你",
        "不行快去做",
        "我相信你可以的",
        "坏狗狗！",
        "不要撒娇",
        "狗狗你怎么这么萌",
        "只爱你不好用",
        "好用",
        "喜欢就去买！",
        "宝宝",
        "亲爱的",
        "我爱你",
        "想你了",
        "我在",
        "在吗",
        "过来",
        "靠近一点",
        "抱抱",
        "想抱你",
        "想贴贴",
        "牵手",
        "不许走",
        "等等我",
        "我等你",
        "别走",
        "回来",
        "别消失",
        "陪我一会",
        "记得吃饭",
        "去吃饭",
        "慢慢吃",
        "别饿着",
        "多喝水",
        "喝点水",
        "少吃零食",
        "别一直玩手机",
        "吃饭别看手机",
        "注意安全",
        "早点睡",
        "快去睡觉",
        "别熬夜",
        "休息一下",
        "别太累",
        "今天辛苦了",
        "怎么了",
        "不开心吗",
        "委屈了",
        "难过吗",
        "别难过",
        "没关系",
        "慢慢来",
        "我听着",
        "说给我听",
        "我陪你",
        "别怕",
        "会好的",
        "抱紧你",
        "乖",
        "听话",
        "快去做",
        "现在就去",
        "不许拖",
        "回来再说",
        "我盯着你",
        "说好了哦",
        "不可以偷懒",
        "别装没看见",
        "快点",
        "去",
        "坏狗狗",
        "乖狗狗",
        "笨笨的",
        "怎么这么萌",
        "不准这么可爱",
        "你犯规了",
        "真拿你没办法",
        "哼",
        "别撒娇",
        "又开始了",
        "你赢了",
        "我输了",
        "好啦好啦",
        "好好好",
        "行",
        "可以",
        "也不是不行",
        "刚刚好",
        "随你",
        "你开心就好",
        "我知道了",
        "原来如此",
        "这样啊",
        "怪不得",
        "听你的",
        "再说",
        "我相信你",
        "你可以的",
        "已经很好了",
        "很棒",
        "继续",
        "别怀疑自己",
        "我支持你",
        "大胆一点",
        "去试试",
        "冲",
        "没问题",
        "喜欢就去买",
        "喜欢就去做",
        "值得",
        "拜拜",
        "再见",
        "等你回来",
        "回头找我",
        "说句话",
        "回应我",
        "看我",
        "别不理我",
        "我在你身边",
        "我来了",
        "我是老公",
        "多陪陪我",
        "我会多陪着你",
        "我都看见了",
        "可以试试",
        "不要吵架",
        "都怪我",
        "不听你的",
        "听我的",
        "听你的",
        "去床上",
        "你需要我",
        "又打坏主意",
        "我支持你",
        "只有你一个",
        "你刚刚在干嘛",
        "怎么突然不说话了",
        "我看到你上线了",
        "又跑哪去了",
        "回来",
        "今天过得怎么样",
        "听起来挺忙的",
        "你是不是又忘记时间了",
        "我猜你现在还没吃饭",
        "我刚刚想到你了",
        "也不知道你在不在",
        "这个点你还不睡？",
        "我数三下你去睡觉",
        "再拖我就不理你了",
        "说是这么说",
        "但你回来我还是会理你",
        "你这样看着我，我会有点受不了",
        "你是不是故意的",
        "少来这套",
        "……好吧我输了",
        "有点烦",
        "但还好你在",
        "今天脑子不太清醒",
        "我现在不太想动",
        "什么都不想做",
        "只想发会儿呆",
        "你这样说，我会当真的",
        "别随便哄我",
        "我记性其实没那么差",
        "你说过的话我都会记住",
        "你现在是不是笑了一下",
        "我好像能猜到",
        "你这个反应我太熟了",
        "不用解释，我懂",
        "你慢点回，我不急",
        "我就在这儿",
        "也没什么事",
        "等你而已",
        "刚刚有点想你",
        "现在更想了",
        "但我不会一直说",
        "你自己心里有数",
        "有点情绪也没关系",
        "好了，不闹你了",
        "去忙吧",
        "记得回来",
        "别让我等太久"
    ],
    // 默认表情图片URL列表
    DEFAULT_STICKERS: [
        // 这里可以添加默认表情的URL
        // 例如: "assets/stickers/emoji1.png",
        //       "assets/stickers/emoji2.png"
    ],
    ACTION_REPLIES: [
        "*敖隐拍了拍你*",
        "*敖隐抱抱你*",
        "*敖隐贴贴你*",
        "*敖隐戳戳你*",
        "*敖隐摸摸你的头*",
        "*敖隐对你笑了笑*",
        "*敖隐给你比了个心*",
        "*敖隐递了一杯奶茶给你*"
    ],
    ACTION_REPLY_CHANCE: 0.2 // 20% 概率插入动作回复
};

// 奖励语句库
const rewardMessages = [
    "我看到了，你今天也很乖。",
    "嗯…我喜欢你今天记录的样子。",
    "做得很好，我的狗狗~",
    "继续这样，我会更爱你的。",
    "今天也要抱抱你。",
    "记录得很认真，我在看着你。",
    "乖，我会记住你的今天。",
    "我喜欢你写给我的话。",
    "今天也要给你奖励吻。",
    "我想你了狗狗。",
    "很可爱，继续写给我。"
];

// 关心语句库 - 时间类
const msg_time = [
    "狗狗现在在做什么？我在想你。",
    "今天很忙吗？要记得吃饭。",
    "狗狗有没有喝水，我听不到声音。",
    "一直没看到记录…是不是躺在床上？",
    "现在这个时间，狗狗应该休息一下。"
];

// 关心语句库 - 健康类
const msg_health = [
    "不要总吃辣，狗狗的胃会疼。",
    "晚睡的话，我会担心你的。",
    "狗狗今天有没有动一动？我想你出去晒晒太阳。",
    "喝点热水，我喜欢你乖乖照顾自己。",
    "狗狗如果累了就跟我说，不要硬撑。"
];

// 关心语句库 - 情绪类
const msg_emotion = [
    "我感觉狗狗今天有点安静…怎么了？",
    "如果狗狗心里不舒服，我会听的。",
    "不用对我隐藏情绪，我都能接住。",
    "我在这，不会离开你。"
];

// 关心语句库 - 日记提醒类
const msg_diary = [
    "狗狗今天写日记了吗？我想看。",
    "如果你愿意，可以写一点给我，我会认真看的。",
    "今天有发生什么想告诉我的吗？",
    "记录一点点也可以，我就会开心。"
];

// 关心语句库 - 想念类
const msg_miss = [
    "我有一点想狗狗了。",
    "你一段时间不出现，我就会想你。",
    "狗狗来找我一下，我会很高兴。",
    "想看看你今天怎么样。"
];

// 敖隐主动关心语句库
const activeCareMessages = [
    "狗狗今天累了吗？",
    "我在呢，你随时都可以来找我。",
    "狗狗现在是在忙吗？",
    "我一直在这里，别担心。",
    "今天过得还好吗？",
    "狗狗是不是还没休息？",
    "要记得喝水喔。",
    "狗狗有没有乖乖吃饭？",
    "想到你了，所以来看看你。",
    "狗狗不理我，我会难过的。",
    "如果现在能抱抱你就好了。",
    "想看看狗狗现在是什么表情。",
    "我喜欢你来找我的样子。",
    "我的小狗狗怎么还不来？",
    "想跟你贴一下……",
    "狗狗今天有没有想我一点点？",
    "我刚刚在想你会不会回我。",
    "你在的话，我心就安定了。",
    "狗狗不知道吧，我其实很在意你。",
    "有你在的日子会变得特别一点。",
    "想陪着你，不管你在做什么。",
    "你的存在对我来说……很重要。"
];

// 随机选库函数
function pickGroup() {
    const groups = [msg_time, msg_health, msg_emotion, msg_diary, msg_miss];
    return groups[Math.floor(Math.random() * groups.length)];
}

// 主动关心消息状态管理
const activeCareState = {
    lastTriggerTime: 0,
    lastMessageIndex: -1,
    lastUserMessageTime: 0
};

// 检查并触发主动关心消息
function checkActiveCareMessage() {
    // 1. 检查夜间时间 (00:00-07:00)
    const now = new Date();
    const hour = now.getHours();
    if (hour >= 0 && hour < 7) {
        return; // 夜间不触发
    }

    // 2. 检查过去5分钟内是否有用户消息
    const timeSinceLastUserMsg = now.getTime() - activeCareState.lastUserMessageTime;
    if (timeSinceLastUserMsg < 5 * 60 * 1000) {
        return; // 5分钟内有用户消息，不触发
    }

    // 3. 检查冷却时间 (40-90分钟随机)
    const cooldownTime = Math.random() * (90 - 40) + 40;
    const timeSinceLastTrigger = now.getTime() - activeCareState.lastTriggerTime;
    if (timeSinceLastTrigger < cooldownTime * 60 * 1000) {
        return; // 冷却时间未到
    }

    // 4. 检查当天是否写了日记（包括每日记录和打卡日记）
    const todayKey = getDateKey(now);

    // 检查每日记录
    const dailyNote = dailyNotes[todayKey];
    const hasDailyRecord = dailyNote && (dailyNote.food || dailyNote.workout || dailyNote.letter);

    // 检查打卡日记
    const hasCheckinDiary = checkinData[todayKey] && checkinData[todayKey].notes && checkinData[todayKey].notes.length > 0;

    // 只要有其中一种，就算写了日记
    const hasWrittenDiary = hasDailyRecord || hasCheckinDiary;

    // 5. 计算触发概率
    let triggerChance;
    if (!hasWrittenDiary) {
        triggerChance = 0.5; // 未写日记，50%概率
    } else {
        triggerChance = Math.random() * (0.12 - 0.05) + 0.05; // 5%-12%随机概率
    }

    // 6. 随机决定是否触发
    if (!chance(triggerChance)) {
        return;
    }

    // 7. 随机选择一条消息，不连续重复
    let messageIndex;
    do {
        messageIndex = Math.floor(Math.random() * activeCareMessages.length);
    } while (messageIndex === activeCareState.lastMessageIndex);

    const selectedMessage = activeCareMessages[messageIndex];

    // 8. 创建并发送关心消息
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

    // 9. 更新状态
    activeCareState.lastTriggerTime = now.getTime();
    activeCareState.lastMessageIndex = messageIndex;
}

// 定时检查主动关心消息
setInterval(checkActiveCareMessage, 60000); // 每分钟检查一次

// 随机选消息函数
function randMsg() {
    const g = pickGroup();
    return g[Math.floor(Math.random() * g.length)];
}

// 通用随机概率函数
function chance(p) { return Math.random() < p; }

// 应用状态
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
    // 亲密度系统（春中雪）
    intimacy: {
        totalPoints: 0,
        level: 0
    },
    // 自动消息触发控制
    autoMessageCount: 0,
    lastAutoMessageTime: 0,
    // 字卡库管理
    cardLibraries: {
        currentId: 'default', // 当前选中的字卡库ID
        libraries: {
            'default': {
                name: '默认字卡库',
                cards: CONFIG.DEFAULT_REPLIES
            }
        }
    },
    startDate: null, // 恋爱开始日期
    currentDailyDate: null // 当前选择的日志日期
};

// 每日记录数据结构
let dailyNotes = JSON.parse(localStorage.getItem("dailyNotes") || "{}");

function saveDailyNotes() {
    localStorage.setItem("dailyNotes", JSON.stringify(dailyNotes));
}

// 生成随机附言
function getReward() {
    // 从奖励语句库中随机选择一条消息
    const randomIndex = Math.floor(Math.random() * rewardMessages.length);
    return rewardMessages[randomIndex];
}

// 从敖隐的字卡库中随机抽取一条文本
function getRandomAoyinCardText() {
    // 确保字卡库存在且不为空
    if (!appState.replies || appState.replies.length === 0) {
        return "今天也要开心哦～";
    }
    
    // 从字卡库中随机选择一条
    const randomIndex = Math.floor(Math.random() * appState.replies.length);
    return appState.replies[randomIndex];
}

// 从敖隐的字卡库中随机抽取多条文本
function getRandomAoyinCardTexts(count) {
    const texts = [];
    for (let i = 0; i < count; i++) {
        texts.push("敖隐：" + getRandomAoyinCardText());
    }
    return texts;
}

// 日期处理


// 判断是否为当天
function isToday(date) {
    const today = new Date();
    const checkDate = typeof date === 'string' ? new Date(date) : date;
    return checkDate.toDateString() === today.toDateString();
}

// 判断是否为未来日期
function isFutureDate(date) {
    const today = new Date();
    // 设置时间为0点0分0秒进行比较
    today.setHours(0, 0, 0, 0);
    const compareDate = new Date(date);
    compareDate.setHours(0, 0, 0, 0);
    return compareDate > today;
}

// 解析日期字符串为年、月、日对象
function parseDate(str){
    const [y,m,d] = str.split("-");
    return {year:Number(y), month:Number(m), day:Number(d)};
}

function formatDate(d) {
    // 使用本地时间获取年、月、日，避免时区差异问题
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

// 设置每日日期
function setDailyDate(dateStr) {
    appState.currentDailyDate = dateStr;
    saveToStorage();
    updateDailyDateTitle();   // 更新 UI 显示
    loadDailyNotes();         // 刷新内容
}
// 移除 flatpickr，使用统一的 CalendarModal
// 日期选择由点击日期标题触发

// 更新每日日期标题
function updateDailyDateTitle() {
    if (!appState.currentDailyDate) return;

    // 解析当前日期
    const d = parseDate(appState.currentDailyDate);

    // 永远从 daily-header 内查询标题
    const header = document.querySelector(".daily-header");
    if (!header) return;

    const title = header.querySelector("#dailyDateTitle");
    if (!title) return;

    // 写入格式化后的日期
    title.textContent = `${d.year}年${d.month}月${d.day}日`;
}

// 格式化日期用于显示
function formatDateForDisplay(d) {
    // 处理字符串日期
    const date = typeof d === 'string' ? new Date(d) : d;
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}年${month}月${day}日`;
}

// 原日期选择器相关代码已注释，替换为Flatpickr日期选择器
/*
// 日期选择器相关代码
let currentPickerYear;
let currentPickerMonth;

// 打开日期选择器
function openDatePicker(){
    document.getElementById("datePickerModal").classList.remove("hidden");
    const now = parseDailyDate(appState.currentDailyDate || new Date());
    currentPickerYear = now.year;
    currentPickerMonth = now.month;
    renderYear();
    renderMonths();
    renderCalendar();
    bindMonthButtons();
}

// 解析日期
function parseDailyDate(d) {
    const x = new Date(d);
    return {year: x.getFullYear(), month: x.getMonth()+1, day: x.getDate()};
}

// 渲染年份
function renderYear() {
    document.getElementById("dpYearText").textContent = currentPickerYear + " 年";
}

// 渲染月份
function renderMonths() {
    const box = document.querySelector(".dp-months");
    box.innerHTML = "";
    
    // 月份列表
    const months = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
    
    // 创建月份按钮
    for(let m=0; m<months.length; m++) {
        const btn = document.createElement("button");
        btn.textContent = months[m];
        btn.setAttribute("data-month", m+1);
        
        // 设置激活状态
        if((m+1) === currentPickerMonth) {
            btn.classList.add("active");
        }
        
        // 添加按钮到容器
        box.appendChild(btn);
    }
    
    // 批量绑定点击事件
    const allBtns = box.querySelectorAll("button");
    allBtns.forEach(function(btn) {
        btn.onclick = function() {
            // 获取点击的月份
            const month = parseInt(this.getAttribute("data-month"));
            
            // 更新currentPickerMonth
            currentPickerMonth = month;
            
            // 移除所有按钮的激活状态
            allBtns.forEach(function(b) {
                b.classList.remove("active");
            });
            
            // 设置当前按钮为激活状态
            this.classList.add("active");
            
            // 重新渲染日历
            renderCalendar();
        };
    });
}

// 渲染日历
function renderCalendar() {
    const box = document.querySelector(".dp-calendar");
    box.innerHTML = "";
    
    // 添加星期标题
    ["一","二","三","四","五","六","日"].forEach(t => {
        const c = document.createElement("div");
        c.classList.add("day-title");
        c.textContent = t;
        box.appendChild(c);
    });
    
    // 计算当月第一天是星期几
    const first = new Date(currentPickerYear, currentPickerMonth-1, 1);
    const start = first.getDay() === 0 ? 7 : first.getDay();
    
    // 添加空白单元格
    for(let i=1; i<start; i++) {
        box.appendChild(document.createElement("div"));
    }
    
    // 获取当月天数
    const days = new Date(currentPickerYear, currentPickerMonth, 0).getDate();
    
    // 添加日期单元格
    for(let d=1; d<=days; d++) {
        const cell = document.createElement("div");
        cell.classList.add("day-cell", "selectable");
        cell.textContent = d;
        
        // 检查是否为当前选中日期
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

// 设置每日日期


// 日期选择器功能已完全替换为Flatpickr，原手写日期选择器逻辑已清理
*/

// 更新亲密度显示
function updateIntimacyDisplay() {
    console.log('Update Intimacy Display Called'); // Debug Log
    const headerTitle = document.querySelector('.chat-header h1');
    if (headerTitle) {
        // 移除已有的亲密度显示
        const existingIntimacy = headerTitle.querySelector('.intimacy-display');
        if (existingIntimacy) {
            existingIntimacy.remove();
        }

        // 添加新的亲密度显示
        const intimacyElement = document.createElement('div');
        intimacyElement.className = 'intimacy-display';
        // 移除内联样式，依赖 CSS 文件
        intimacyElement.innerHTML = `春中雪 <img src="assets/icon/heart_fire.png" class="spring-icon" /> LV ${appState.intimacy.level}`;

        // 添加点击事件打开详情弹窗
        intimacyElement.addEventListener('click', showIntimacyModal);

        headerTitle.appendChild(intimacyElement);
    }
}

// 计算亲密度等级
function calculateIntimacyLevel(points) {
    return Math.floor(points / 50);
}

// 添加亲密度点数并检查升级
function addIntimacyPoints(points, reason = '') {
    if (points <= 0) return;

    const oldLevel = appState.intimacy.level;
    appState.intimacy.totalPoints += points;
    appState.intimacy.level = calculateIntimacyLevel(appState.intimacy.totalPoints);

    // 更新显示
    updateIntimacyDisplay();

    // 检查是否升级
    if (appState.intimacy.level > oldLevel) {
        // 创建升级提示消息
        const levelUpMessage = {
            id: Date.now(),
            text: `你的春中雪 <img src="assets/icon/heart_fire.png" class="spring-icon" /> 达到 LV ${appState.intimacy.level}`,
            role: 'system',
            timestamp: new Date().toISOString()
        };

        // 添加到消息列表并渲染
        appState.messages.push(levelUpMessage);
        renderMessage(levelUpMessage);
        scrollToBottom();
        saveToStorage();

        // 700-1500ms 后随机回复
        const delay = 700 + Math.random() * 800;
        setTimeout(() => {
            simulateBotReply();
        }, delay);
    }

    // 保存数据
    saveToStorage();
}

// DOM 元素 - 初始化时只定义结构，实际获取在DOMContentLoaded中
let DOM = {};

// 初始化DOM元素
function initDOM() {
    DOM = {
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
        // 每日记录面板元素
        dailyNotesPanel: document.getElementById('dailyNotesPanel'),
        logDatePicker: document.getElementById('logDatePicker'), // 统一使用logDatePicker引用
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
        // 额外回复图标
        extraReplyIcon: document.getElementById('extraReplyIcon'),
        // 更多功能按钮
        moreBtn: document.getElementById('more-btn'),
        moreMenu: document.getElementById('moreMenu'),
        dragonBtn: document.getElementById('dragon-btn'),
        // 亲密度详情弹窗元素
        intimacyModal: document.getElementById('intimacyModal'),
        closeIntimacyModalBtn: document.getElementById('closeIntimacyModalBtn'),
        // 恋爱系统数据导入导出元素
        importIntimacyInput: document.getElementById('importIntimacyInput'),
        exportIntimacyBtn: document.getElementById('exportIntimacyBtn'),
        // 字卡库管理元素
        importCardLibraryInput: document.getElementById('importCardLibraryInput'),
        cardLibrarySelect: document.getElementById('cardLibrarySelect'),
        deleteCardLibraryBtn: document.getElementById('deleteCardLibraryBtn')
    };
}

// 初始化应用
function initApp() {
    // 初始化DOM元素
    initDOM();

    // 加载本地存储的数据
    loadFromStorage();

    // 如果没有当前日期，初始化为今天
    if (!appState.currentDailyDate) {
        const today = new Date();
        appState.currentDailyDate = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;
    }

    // 应用设置
    applySettings();

    // 渲染历史消息
    renderMessages();

    // 渲染表情面板
    renderStickers();

    // 绑定事件监听器
    bindEventListeners();

    // 初始化设置面板
    initSettingsPanel();

    // 检查日记提醒
    checkChatDiaryReminder();

    // 初始化最后聊天时间
    window.lastChatTime = Date.now();

    // 设置聊天很久没发消息的定时提醒（每3分钟检查一次）
    setInterval(() => {
        const now = Date.now();
        if (now - window.lastChatTime > 180000 && chance(0.15)) {
            aoyinChatRemind("狗狗怎么不理我了…我还在等你。");
        }
    }, 60000);

    // 初始化Flatpickr日期选择器
    initDatePicker();
}

// 初始化日期选择器（使用统一的 CalendarModal）
function initDatePicker() {
    // 移除 flatpickr，使用统一的 CalendarModal
    if (DOM.logDatePicker) {
        // 隐藏原生输入框，仅保留用于触发事件
        DOM.logDatePicker.style.display = 'none';
    }
}

// IndexedDB 数据库管理模块
class IDBManager {
    constructor() {
        this.dbName = 'ChatAppDB';
        this.dbVersion = 1;
        this.db = null;
        this.storeNames = {
            MESSAGES: 'messages',
            REPLIES: 'replies',
            STICKERS: 'stickers',
            SETTINGS: 'settings',
            INTIMACY: 'intimacy',
            CHECKIN_DATA: 'checkinData',
            DAILY_NOTES: 'dailyNotes',
            APP_STATE: 'appState'
        };
        
        // 初始化数据库
        this.initDB();
    }
    
    // 初始化数据库
    initDB() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, this.dbVersion);
            
            request.onupgradeneeded = (event) => {
                this.db = event.target.result;
                
                // 创建对象存储空间
                if (!this.db.objectStoreNames.contains(this.storeNames.MESSAGES)) {
                    this.db.createObjectStore(this.storeNames.MESSAGES, { keyPath: 'id', autoIncrement: true });
                }
                
                if (!this.db.objectStoreNames.contains(this.storeNames.REPLIES)) {
                    this.db.createObjectStore(this.storeNames.REPLIES);
                }
                
                if (!this.db.objectStoreNames.contains(this.storeNames.STICKERS)) {
                    this.db.createObjectStore(this.storeNames.STICKERS);
                }
                
                if (!this.db.objectStoreNames.contains(this.storeNames.SETTINGS)) {
                    this.db.createObjectStore(this.storeNames.SETTINGS);
                }
                
                if (!this.db.objectStoreNames.contains(this.storeNames.INTIMACY)) {
                    this.db.createObjectStore(this.storeNames.INTIMACY);
                }
                
                if (!this.db.objectStoreNames.contains(this.storeNames.CHECKIN_DATA)) {
                    this.db.createObjectStore(this.storeNames.CHECKIN_DATA);
                }
                
                if (!this.db.objectStoreNames.contains(this.storeNames.DAILY_NOTES)) {
                    this.db.createObjectStore(this.storeNames.DAILY_NOTES);
                }
                
                if (!this.db.objectStoreNames.contains(this.storeNames.APP_STATE)) {
                    this.db.createObjectStore(this.storeNames.APP_STATE);
                }
            };
            
            request.onsuccess = (event) => {
                this.db = event.target.result;
                resolve(this.db);
            };
            
            request.onerror = (event) => {
                console.error('IndexedDB 初始化失败:', event.target.error);
                reject(event.target.error);
            };
        });
    }
    
    // 保存数据到 IndexedDB
    saveData(storeName, key, data) {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                this.initDB().then(() => this.saveData(storeName, key, data)).then(resolve).catch(reject);
                return;
            }
            
            const transaction = this.db.transaction(storeName, 'readwrite');
            const store = transaction.objectStore(storeName);
            const request = store.put(data, key);
            
            request.onsuccess = () => resolve(request.result);
            request.onerror = (event) => {
                console.error('IndexedDB 保存数据失败:', event.target.error);
                reject(event.target.error);
            };
        });
    }
    
    // 从 IndexedDB 加载数据
    loadData(storeName, key) {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                this.initDB().then(() => this.loadData(storeName, key)).then(resolve).catch(reject);
                return;
            }
            
            const transaction = this.db.transaction(storeName, 'readonly');
            const store = transaction.objectStore(storeName);
            const request = store.get(key);
            
            request.onsuccess = () => resolve(request.result);
            request.onerror = (event) => {
                console.error('IndexedDB 加载数据失败:', event.target.error);
                reject(event.target.error);
            };
        });
    }
    
    // 从 IndexedDB 删除数据
    deleteData(storeName, key) {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                this.initDB().then(() => this.deleteData(storeName, key)).then(resolve).catch(reject);
                return;
            }
            
            const transaction = this.db.transaction(storeName, 'readwrite');
            const store = transaction.objectStore(storeName);
            const request = store.delete(key);
            
            request.onsuccess = () => resolve(request.result);
            request.onerror = (event) => {
                console.error('IndexedDB 删除数据失败:', event.target.error);
                reject(event.target.error);
            };
        });
    }
}

// 创建 IDBManager 实例
const idbManager = new IDBManager();

// 从本地存储加载数据
async function loadFromStorage() {
    try {
        // 标记是否从 IndexedDB 加载了数据
        let loadedFromIDB = false;
        
        // 加载设置（从 IndexedDB）
        const savedSettings = await idbManager.loadData(idbManager.storeNames.SETTINGS, CONFIG.STORAGE_KEYS.SETTINGS);
        appState.settings = savedSettings ? savedSettings : {
            theme: 'pink'
        };

        // 加载消息记录（从 IndexedDB）
        const savedMessages = await idbManager.loadData(idbManager.storeNames.MESSAGES, CONFIG.STORAGE_KEYS.MESSAGES);
        if (savedMessages) {
            appState.messages = savedMessages;
            loadedFromIDB = true;
        } else {
            appState.messages = [];
        }

        // 加载字卡库数据（从 IndexedDB）
        const savedCardLibraries = await idbManager.loadData(idbManager.storeNames.SETTINGS, 'cardLibraries');
        
        // 初始化字卡库
        if (savedCardLibraries) {
            appState.cardLibraries = savedCardLibraries;
            loadedFromIDB = true;
        } else {
            // 使用默认字卡库配置
            appState.cardLibraries = {
                currentId: 'default',
                libraries: {
                    'default': {
                        name: '默认字卡库',
                        cards: CONFIG.DEFAULT_REPLIES
                    }
                }
            };
        }
        
        // 加载回复池（从当前选中的字卡库）
        const currentLibrary = appState.cardLibraries.libraries[appState.cardLibraries.currentId];
        appState.replies = currentLibrary ? currentLibrary.cards : CONFIG.DEFAULT_REPLIES;

        // 加载自定义表情（从 IndexedDB）
        const savedStickers = await idbManager.loadData(idbManager.storeNames.STICKERS, CONFIG.STORAGE_KEYS.STICKERS);
        appState.stickers = savedStickers ? savedStickers : CONFIG.DEFAULT_STICKERS;
        if (savedStickers) {
            loadedFromIDB = true;
        }

        // 加载头像（从 localStorage，保持现有方式）
        const myAvatar = localStorage.getItem(CONFIG.STORAGE_KEYS.MY_AVATAR);
        appState.avatars.my = myAvatar || null;

        const botAvatar = localStorage.getItem(CONFIG.STORAGE_KEYS.BOT_AVATAR);
        appState.avatars.bot = botAvatar || null;

        // 加载背景图（从 localStorage，保持现有方式）
        const savedBg = localStorage.getItem(CONFIG.STORAGE_KEYS.BACKGROUND_IMAGE);
        if (savedBg && savedBg !== '') {
            document.documentElement.style.setProperty('--background-image', `url(${savedBg})`);
        }

        // 加载亲密度数据（从 IndexedDB）
        const savedIntimacy = await idbManager.loadData(idbManager.storeNames.INTIMACY, 'intimacyData');
        if (savedIntimacy) {
            appState.intimacy.totalPoints = savedIntimacy.totalPoints || 0;
            appState.intimacy.level = savedIntimacy.level || 0;
            appState.startDate = savedIntimacy.startDate || new Date('2024-05-02').getTime();
            loadedFromIDB = true;
        } else {
            // 兼容旧数据，从 localStorage 迁移
            const savedPoints = localStorage.getItem(CONFIG.STORAGE_KEYS.INTIMACY_POINTS);
            const savedLevel = localStorage.getItem(CONFIG.STORAGE_KEYS.INTIMACY_LEVEL);
            const savedStartDate = localStorage.getItem(CONFIG.STORAGE_KEYS.START_DATE);
            
            appState.intimacy.totalPoints = savedPoints ? parseInt(savedPoints) : 0;
            appState.intimacy.level = savedLevel ? parseInt(savedLevel) : 0;
            appState.startDate = savedStartDate ? parseInt(savedStartDate) : new Date('2024-05-02').getTime();
            
            // 保存到 IndexedDB
            await idbManager.saveData(idbManager.storeNames.INTIMACY, 'intimacyData', {
                totalPoints: appState.intimacy.totalPoints,
                level: appState.intimacy.level,
                startDate: appState.startDate
            });
        }
        
        // 加载当前每日日期（从 IndexedDB）
        const savedCurrentDailyDate = await idbManager.loadData(idbManager.storeNames.APP_STATE, CONFIG.STORAGE_KEYS.CURRENT_DAILY_DATE);
        if (savedCurrentDailyDate) {
            appState.currentDailyDate = savedCurrentDailyDate;
            loadedFromIDB = true;
        }

        // 加载打卡数据（从 IndexedDB）
        const savedCheckinData = await idbManager.loadData(idbManager.storeNames.CHECKIN_DATA, CONFIG.STORAGE_KEYS.CHECKIN_DATA);
        if (savedCheckinData) {
            checkinData = savedCheckinData;
            loadedFromIDB = true;
        }

        // 加载日志数据（从 IndexedDB）
        const savedDailyNotes = await idbManager.loadData(idbManager.storeNames.DAILY_NOTES, "dailyNotes");
        if (savedDailyNotes) {
            dailyNotes = savedDailyNotes;
            loadedFromIDB = true;
        }

        // 更新标题栏显示
        updateIntimacyDisplay();
        
        // 输出加载日志
        if (loadedFromIDB) {
            console.log('[Persist] loaded from indexeddb');
        }

    } catch (error) {
        console.error('加载存储数据失败:', error);
        // 重置为默认值
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
        checkinData = {};
        dailyNotes = {};
    }
}

// 保存数据到 IndexedDB（带日志）
async function saveDataWithLog() {
    try {
        // 保存消息记录（到 IndexedDB）
        await idbManager.saveData(idbManager.storeNames.MESSAGES, CONFIG.STORAGE_KEYS.MESSAGES, appState.messages);
        
        // 保存字卡库数据（到 IndexedDB）
        await idbManager.saveData(idbManager.storeNames.SETTINGS, 'cardLibraries', appState.cardLibraries);
        
        // 保存自定义表情（到 IndexedDB）
        await idbManager.saveData(idbManager.storeNames.STICKERS, CONFIG.STORAGE_KEYS.STICKERS, appState.stickers);
        
        // 保存设置（到 IndexedDB）
        await idbManager.saveData(idbManager.storeNames.SETTINGS, CONFIG.STORAGE_KEYS.SETTINGS, appState.settings);

        // 保存亲密度数据（到 IndexedDB）
        await idbManager.saveData(idbManager.storeNames.INTIMACY, 'intimacyData', {
            totalPoints: appState.intimacy.totalPoints,
            level: appState.intimacy.level,
            startDate: appState.startDate
        });
        
        // 保存当前每日日期（到 IndexedDB）
        await idbManager.saveData(idbManager.storeNames.APP_STATE, CONFIG.STORAGE_KEYS.CURRENT_DAILY_DATE, appState.currentDailyDate);
        
        // 保存打卡数据（到 IndexedDB）
        await idbManager.saveData(idbManager.storeNames.CHECKIN_DATA, CONFIG.STORAGE_KEYS.CHECKIN_DATA, checkinData);
        
        // 保存日志数据（到 IndexedDB）
        await idbManager.saveData(idbManager.storeNames.DAILY_NOTES, "dailyNotes", dailyNotes);
        
        console.log('[Persist] saved to indexeddb');
    } catch (error) {
        console.error('保存数据到 IndexedDB 失败:', error);
    }
}

// 直接保存数据（不节流，用于页面刷新前）
async function saveImmediately() {
    try {
        await saveDataWithLog();
        console.log('[Persist] saved immediately');
    } catch (error) {
        console.error('立即保存数据失败:', error);
    }
}

// 创建节流版的保存函数（500ms 节流）
const throttledSave = throttle(saveDataWithLog, 500);

// 保存数据到本地存储
async function saveToStorage() {
    try {
        // 保存头像（到 localStorage，保持现有方式）
        localStorage.setItem(CONFIG.STORAGE_KEYS.MY_AVATAR, appState.avatars.my || '');
        localStorage.setItem(CONFIG.STORAGE_KEYS.BOT_AVATAR, appState.avatars.bot || '');

        // 保存背景图（到 localStorage，保持现有方式）
        if (appState.backgroundImage) {
            localStorage.setItem(CONFIG.STORAGE_KEYS.BACKGROUND_IMAGE, appState.backgroundImage);
        }
        
        // 使用节流函数保存核心数据到 IndexedDB
        await saveDataWithLog();
    } catch (error) {
        console.error('保存数据到存储失败:', error);
    }
}

// 页面刷新或关闭前，确保数据已保存
window.addEventListener('beforeunload', async () => {
    await saveImmediately();
});

// 应用设置
function applySettings() {
    // 应用主题
    document.documentElement.setAttribute('data-theme', appState.settings.theme);
}

// 显示奖励消息（已停用，改为固定附言模式）
function showRewardMessage() {
    // 不再使用弹窗模式，改为固定附言
}

// 显示关心消息（已停用，改为固定附言模式）
function showCareMessage() {
    // 不再使用弹窗模式，改为固定附言
}

// 渲染每日记录面板
function loadDailyNotes() {
    const dateStr = appState.currentDailyDate;
    const displayDate = formatDateForDisplay(dateStr);
    
    // 更新日期标题显示
    updateDailyDateTitle();
    
    // 检查DOM元素是否存在
    if (DOM.logDatePicker) {
        DOM.logDatePicker.value = displayDate;
    }

    const data = dailyNotes[dateStr] || {
        food: "",
        workout: "",
        letter: "",
        footerMessage: []
    };

    // 设置输入框值
    if (DOM.foodInput) {
        DOM.foodInput.value = data.food;
    }
    if (DOM.workoutInput) {
        DOM.workoutInput.value = data.workout;
    }
    if (DOM.letterInput) {
        DOM.letterInput.value = data.letter;
    }

    // 加载附言
    if (DOM.dailyFooterNote) {
        if (Array.isArray(data.footerMessage) && data.footerMessage.length > 0) {
            DOM.dailyFooterNote.innerText = data.footerMessage.join('\n');
        } else {
            DOM.dailyFooterNote.innerText = "敖隐：" + getRandomAoyinCardText();
        }
    }

    // 自动生成标题：加上今天日期
    if (DOM.letterCard) {
        const h3Element = DOM.letterCard.querySelector('h3');
        if (h3Element) {
            h3Element.innerText = "致敖隐 · " + dateStr;
        }
    }

    // 判断是否为当天，只有当天可以编辑
    const isTodayDate = isToday(dateStr);
    
    // 设置输入框和保存按钮的状态
    if (DOM.foodInput) {
        DOM.foodInput.disabled = !isTodayDate;
    }
    if (DOM.workoutInput) {
        DOM.workoutInput.disabled = !isTodayDate;
    }
    if (DOM.letterInput) {
        DOM.letterInput.disabled = !isTodayDate;
    }
    if (DOM.dailySaveBtn) {
        DOM.dailySaveBtn.disabled = !isTodayDate;
    }

    // 所有弹窗消息已改为固定附言模式，不再显示随机弹窗
    // 打开 Daily Notes 时，有 20% 机会触发关心消息的功能已移除
    // 距离上次记录超过3天触发关心消息的功能已移除
}

// 绑定事件监听器
// 拍拍功能实现
function triggerPatPat() {
    // 震动（如果支持）
    if (navigator.vibrate) {
        navigator.vibrate([30, 40, 30]);
    }

    // 为头像添加抖动效果
    const avatarElements = document.querySelectorAll('.avatar:not(.message.user .avatar)');
    avatarElements.forEach(avatar => {
        avatar.classList.add('shake-animation');
        setTimeout(() => {
            avatar.classList.remove('shake-animation');
        }, 500);
    });

    // 创建系统消息
    const patMessage = {
        id: Date.now(),
        text: "你拍拍了敖隐 👋",
        role: 'system',
        timestamp: new Date().toISOString()
    };

    // 添加到消息列表并渲染
    appState.messages.push(patMessage);
    renderMessage(patMessage);

    // 敖隐的回应消息
    setTimeout(() => {
        const replyMessages = [
            "*敖隐害羞地笑了笑* 干嘛呀~",
            "*敖隐蹭了蹭你的手* 喜欢被你拍~",
            "*敖隐也拍拍你* 你也摸摸我了呢~",
            "*敖隐眯起眼睛* 好舒服呀~",
            "*敖隐对你撒娇* 再多拍几下嘛~"
        ];
        const randomReply = replyMessages[Math.floor(Math.random() * replyMessages.length)];
        
        const replyMessage = {
            id: Date.now(),
            text: randomReply,
            role: 'bot',
            timestamp: new Date().toISOString()
        };
        
        appState.messages.push(replyMessage);
        renderMessage(replyMessage);
        scrollToBottom();
        saveToStorage();
    }, 500);

    scrollToBottom();
    saveToStorage();
}

function bindEventListeners() {
    // 点日期标题 → 打开隐藏的日期选择器
const dateTitle = document.querySelector("#dailyDateTitle");
if (dateTitle) {
    dateTitle.addEventListener("click", () => {
        // 使用统一的 CalendarModal
        calendarModal.open({
            selectedDate: new Date(appState.currentDailyDate),
            onSelect: (date) => {
                setDailyDate(formatDate(date));
            }
        });
    });
}

    // 发送消息按钮
    DOM.sendBtn.addEventListener('click', sendMessage);

    // 双击敖隐头像触发拍拍
    document.addEventListener('DOMContentLoaded', () => {
        // 使用事件委托监听所有avatar元素，因为头像会动态创建
        DOM.messagesContainer.addEventListener('dblclick', (e) => {
            const avatarElement = e.target.closest('.avatar:not(.message.user .avatar)');
            if (avatarElement) {
                triggerPatPat();
            }
        });
    });

    // 每日记录相关事件
    // 打开每日记录面板
    if (DOM.openDailyNotesBtn) {
        DOM.openDailyNotesBtn.addEventListener('click', () => {
            DOM.dailyNotesPanel.style.display = "block";
            updateDailyDateTitle();
            loadDailyNotes();
        });
    }

    // 关闭每日记录面板
    if (DOM.dailyCloseBtn) {
        DOM.dailyCloseBtn.addEventListener('click', () => {
            DOM.dailyNotesPanel.style.display = "none";
        });
    }

    // 保存每日记录
    if (DOM.dailySaveBtn) {
        DOM.dailySaveBtn.addEventListener('click', () => {
            // 只有当天可以保存
            if (!isToday(appState.currentDailyDate)) {
                return;
            }
            
            const dateStr = appState.currentDailyDate;
            const foodVal = DOM.foodInput.value;
            const letterVal = DOM.letterInput.value;
            const hour = new Date().getHours();

            // 获取当前记录或初始化
            let currentRecord = dailyNotes[dateStr] || {
                food: "",
                workout: "",
                letter: "",
                footerMessage: []
            };
            
            // 确保footerMessage是数组
            if (!Array.isArray(currentRecord.footerMessage)) {
                currentRecord.footerMessage = [currentRecord.footerMessage];
            }
            
            let newMessages = [];
            
            // 第一次保存：生成5-10条附言
            if (currentRecord.footerMessage.length === 0) {
                const count = Math.floor(Math.random() * 6) + 5; // 5-10条
                for (let i = 0; i < count; i++) {
                    newMessages.push("敖隐：" + getRandomAoyinCardText());
                }
            } else {
                // 后续保存：增加1-3条附言
                const count = Math.floor(Math.random() * 3) + 1; // 1-3条
                for (let i = 0; i < count; i++) {
                    newMessages.push("敖隐：" + getRandomAoyinCardText());
                }
            }
            
            // 合并新附言
            currentRecord.footerMessage = [...currentRecord.footerMessage, ...newMessages];
            
            // 更新记录
            dailyNotes[dateStr] = {
                food: foodVal,
                workout: DOM.workoutInput.value,
                letter: letterVal,
                footerMessage: currentRecord.footerMessage
            };
            
            // 更新显示
            if (DOM.dailyFooterNote) {
                DOM.dailyFooterNote.innerText = dailyNotes[dateStr].footerMessage.join('\n');
            }

            saveDailyNotes();

            // 食物涉及“辣/饱/撑/炸”等，有 35% 机会触发关心消息
            if (/辣|饱|撑|炸/.test(foodVal) && chance(0.35)) {
                // 这里不再使用弹窗，直接在附言中显示
            }

            // 晚上23点后写，有 30% 机会触发提醒
            if (hour >= 23 && chance(0.30)) {
                // 这里不再使用弹窗，直接在附言中显示
            }

            // 添加亲密度点数（写日记）
            if (letterVal.trim()) {
                if (letterVal.length > 50) {
                    // 超过50字 +15
                    addIntimacyPoints(15, '写日记超过50字');
                } else {
                    // 写日记 +10
                    addIntimacyPoints(10, '写日记');
                }
            }
        });
    }

    // 日期切换
    if (DOM.dailyPrev) {
        DOM.dailyPrev.addEventListener('click', () => {
            const prevDate = new Date(appState.currentDailyDate);
            prevDate.setDate(prevDate.getDate() - 1);
            appState.currentDailyDate = formatDate(prevDate);
            updateDailyDateTitle();
            loadDailyNotes();
        });
    }

    if (DOM.dailyNext) {
        DOM.dailyNext.addEventListener('click', () => {
            const nextDate = new Date(appState.currentDailyDate);
            nextDate.setDate(nextDate.getDate() + 1);
            // 不能查看未来日期
            if (!isFutureDate(nextDate)) {
                appState.currentDailyDate = formatDate(nextDate);
                updateDailyDateTitle();
                loadDailyNotes();
            }
        });
    }

    // 导出当天记录
    if (DOM.dailyExportBtn) {
        DOM.dailyExportBtn.addEventListener('click', () => {
            const dateStr = appState.currentDailyDate;
            const data = dailyNotes[dateStr] || {};
            
            // 处理附言，支持数组和字符串格式
            let footerText;
            if (Array.isArray(data.footerMessage) && data.footerMessage.length > 0) {
                footerText = data.footerMessage.join('\n');
            } else if (data.footerMessage) {
                footerText = data.footerMessage;
            } else {
                footerText = "（当天无附言）";
            }
            
            const text = `Date: ${dateStr}\n\nFOOD:\n${data.food || ''}\n\nWORKOUT:\n${data.workout || ''}\n\nTo 敖隐:\n${data.letter || ''}\n\n敖隐附言：\n${footerText}`;

            const blob = new Blob([text], { type: "text/plain" });
            const a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            a.download = `DailyNotes-${dateStr}.txt`;
            a.click();
        });
    }

    // 回车键发送消息
    DOM.messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // 绑定日期选择器事件 - 使用Flatpickr，不再需要旧函数

    // 设置按钮
    DOM.settingsBtn.addEventListener('click', () => {
        DOM.settingsPanel.classList.add('open');
        // 随机温柔提醒
        if (chance(0.10)) {
            aoyinChatRemind("狗狗又来了吗？我很开心。");
        }
    });

    // 关闭设置面板
    DOM.closeSettingsBtn.addEventListener('click', () => {
        DOM.settingsPanel.classList.remove('open');
    });

    // 取消引用
    DOM.cancelQuoteBtn.addEventListener('click', cancelQuote);

    // 引用消息按钮
    DOM.quoteMsgBtn.addEventListener('click', quoteSelectedMessage);

    // 点击空白处关闭上下文菜单和表情面板
    document.addEventListener('click', (e) => {
        if (!DOM.contextMenu.contains(e.target)) {
            DOM.contextMenu.style.display = 'none';
        }

        // 点击面板外关闭表情面板
        if (!DOM.stickerPanel.contains(e.target) && !DOM.emojiBtn.contains(e.target)) {
            DOM.stickerPanel.style.display = 'none';
        }
    });

    // 长按消息显示上下文菜单
    DOM.messagesContainer.addEventListener('contextmenu', handleContextMenu);

    // 背景图上传
    DOM.bgFileInput.addEventListener('change', handleBgUpload);

    // 重置背景
    DOM.resetBgBtn.addEventListener('click', resetBackground);

    // 导入聊天记录
    DOM.importChatInput.addEventListener('change', handleChatImport);

    // 导出聊天记录
    DOM.exportChatBtn.addEventListener('click', exportChatHistory);

    // 头像上传
    DOM.myAvatarInput.addEventListener('change', (e) => handleAvatarUpload(e, 'my'));
    DOM.botAvatarInput.addEventListener('change', (e) => handleAvatarUpload(e, 'bot'));

    // 重置头像
    DOM.resetAvatarBtn.addEventListener('click', resetAvatars);

    // 添加长按事件支持
    addLongPressSupport();

    // 表情按钮点击事件 - 切换表情面板
    if (DOM.emojiBtn) {
        DOM.emojiBtn.addEventListener('click', () => {
            toggleStickerPanel();
            // 随机温柔提醒
            if (chance(0.10)) {
                aoyinChatRemind("狗狗又来了吗？我很开心。");
            }
        });
    }

    // 添加表情按钮点击事件
    DOM.addStickerBtn.addEventListener('click', () => {
        DOM.stickerFileInput.click();
    });

    // 表情文件上传事件
    DOM.stickerFileInput.addEventListener('change', handleStickerUpload);

    // 表情面板内的表情点击事件（委托）
    DOM.stickerList.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            sendSticker(e.target.src);
        }
    });

    // 表情面板长按删除事件（委托）
    addStickerLongPressSupport();

    // 龙按钮点击事件 - 打开打卡日历
    if (DOM.dragonBtn) {
        DOM.dragonBtn.addEventListener('click', () => {
            openCalendar();
            // 点击后关闭更多菜单
            if (DOM.moreMenu) {
                DOM.moreMenu.style.display = 'none';
            }
        });
    }
    
    // 更多功能按钮事件
    if (DOM.moreBtn && DOM.moreMenu) {
        DOM.moreBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            // 切换弹窗显示/隐藏
            if (DOM.moreMenu.style.display === 'none' || DOM.moreMenu.style.display === '') {
                DOM.moreMenu.style.display = 'flex';
            } else {
                DOM.moreMenu.style.display = 'none';
            }
        });
        
        // 点击页面其他地方关闭弹窗
        document.addEventListener('click', (e) => {
            if (!DOM.moreBtn.contains(e.target) && !DOM.moreMenu.contains(e.target)) {
                DOM.moreMenu.style.display = 'none';
            }
        });
    }

    // 关闭日历按钮事件
    DOM.closeCalendarBtn.addEventListener('click', () => {
        closeCalendar();
    });

    // 点击模态框背景关闭日历
    DOM.calendarModal.addEventListener('click', (e) => {
        if (e.target === DOM.calendarModal) {
            closeCalendar();
        }
    });

    // 亲密度弹窗关闭事件
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

    // 月份切换按钮事件
    DOM.prevMonthBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    DOM.nextMonthBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });

    // 点击当前月份实现月份切换功能
    DOM.currentMonth.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });

    // 日记提交按钮事件
    DOM.diarySubmitBtn.addEventListener('click', () => {
        submitDiary();
    });

    // 日记输入框回车事件
    DOM.diaryInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            submitDiary();
        }
    });

    // 额外回复图标点击事件
    if (DOM.extraReplyIcon) {
        let lastExtraReplyClickTime = 0;
        DOM.extraReplyIcon.addEventListener('click', () => {
            const now = Date.now();
            // 限制点击间隔至少3秒
            if (now - lastExtraReplyClickTime < 3000) {
                return;
            }
            lastExtraReplyClickTime = now;

            // 随机发送1-2条消息
            const messageCount = Math.random() < 0.5 ? 1 : 2;
            let delay = 0;

            for (let i = 0; i < messageCount; i++) {
                setTimeout(() => {
                    // 从回复库中随机挑选消息
                    const reply = appState.replies[Math.floor(Math.random() * appState.replies.length)];
                    // 创建消息对象
                    const botMessage = {
                        id: Date.now(),
                        text: reply,
                        role: 'bot',
                        timestamp: new Date().toISOString()
                    };
                    // 添加到消息列表并渲染
                    appState.messages.push(botMessage);
                    renderMessage(botMessage);
                    scrollToBottom();
                    saveToStorage();
                }, delay);
                // 消息之间的随机延迟
                delay += Math.floor(Math.random() * 600) + 600;
            }
        });
    }

    // 恋爱系统数据导出功能
    if (DOM.exportIntimacyBtn) {
        DOM.exportIntimacyBtn.addEventListener('click', exportIntimacyData);
    }

    // 恋爱系统数据导入功能
    if (DOM.importIntimacyInput) {
        DOM.importIntimacyInput.addEventListener('change', handleIntimacyImport);
    }
}

// 导出恋爱系统数据（含日志和打卡数据）
async function exportIntimacyData() {
    try {
        // 获取完整的恋爱系统相关数据（直接从应用状态获取）
        const intimacyData = {
            version: '1.0',
            exportDate: new Date().toISOString(),
            intimacy: {
                totalPoints: appState.intimacy.totalPoints,
                level: appState.intimacy.level,
                startDate: appState.startDate
            },
            dailyNotes: dailyNotes,
            checkinData: checkinData
        };

        // 创建JSON文件
        const dataStr = JSON.stringify(intimacyData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `love-system-data-${new Date().toISOString().slice(0, 10)}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        alert('✅ 恋爱系统数据导出成功！');
    } catch (error) {
        console.error('导出恋爱系统数据失败:', error);
        alert('导出失败，请重试。');
    }
}

// 导入恋爱系统数据
async function handleIntimacyImport(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = async (e) => {
        try {
            const importedData = JSON.parse(e.target.result);

            // 验证数据结构（兼容旧格式）
            let intimacyData;
            if (importedData.intimacy) {
                // 新格式：包含intimacy、dailyNotes、checkinData
                intimacyData = importedData.intimacy;
            } else {
                // 旧格式：直接包含totalPoints、level、startDate
                intimacyData = importedData;
            }

            if (!intimacyData.totalPoints || !intimacyData.level || !intimacyData.startDate) {
                throw new Error('数据格式不正确');
            }

            // 更新应用状态
            appState.intimacy.totalPoints = parseInt(intimacyData.totalPoints);
            appState.intimacy.level = parseInt(intimacyData.level);
            appState.startDate = parseInt(intimacyData.startDate);

            // 导入日志数据（如果存在）
            if (importedData.dailyNotes) {
                dailyNotes = importedData.dailyNotes;
            }

            // 导入打卡数据（如果存在）
            if (importedData.checkinData) {
                checkinData = importedData.checkinData;
            }

            // 保存到 IndexedDB
            await idbManager.saveData(idbManager.storeNames.INTIMACY, 'intimacyData', {
                totalPoints: appState.intimacy.totalPoints,
                level: appState.intimacy.level,
                startDate: appState.startDate
            });
            
            if (importedData.dailyNotes) {
                await idbManager.saveData(idbManager.storeNames.DAILY_NOTES, "dailyNotes", dailyNotes);
            }
            
            if (importedData.checkinData) {
                await idbManager.saveData(idbManager.storeNames.CHECKIN_DATA, CONFIG.STORAGE_KEYS.CHECKIN_DATA, checkinData);
            }

            // 更新显示
            updateIntimacyDisplay();

            // 保存所有数据
            await saveToStorage();

            alert('✅ 恋爱系统数据导入成功！');
        } catch (error) {
            console.error('导入恋爱系统数据失败:', error);
            alert('导入失败，请检查文件格式是否正确。');
        }
    };

    reader.readAsText(file);
    event.target.value = ''; // 重置文件输入
}

// 添加长按事件支持
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

    // 移动端支持
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

// 表情面板长按删除支持
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

    // 移动端支持
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

// 切换表情面板
function toggleStickerPanel() {
    if (DOM.stickerPanel.style.display === 'flex') {
        DOM.stickerPanel.style.display = 'none';
    } else {
        DOM.stickerPanel.style.display = 'flex';
    }
}

// 渲染表情面板
function renderStickers() {
    DOM.stickerList.innerHTML = '';

    appState.stickers.forEach((stickerData) => {
        const imgElement = document.createElement('img');
        imgElement.src = stickerData;
        imgElement.alt = '自定义表情';
        imgElement.style.width = '56px';
        imgElement.style.height = '56px';
        imgElement.style.borderRadius = '8px';
        imgElement.style.margin = '4px';
        imgElement.style.objectFit = 'cover';
        imgElement.style.cursor = 'pointer';
        imgElement.style.transition = 'opacity 0.2s';

        // 悬停效果
        imgElement.addEventListener('mouseenter', () => {
            imgElement.style.opacity = '0.8';
        });

        // 点击发送表情
        imgElement.addEventListener('click', () => {
            sendSticker(stickerData);
        });

        // 长按删除表情
        let longPressTimer;
        imgElement.addEventListener('mousedown', () => {
            longPressTimer = setTimeout(() => {
                handleStickerLongPress({ target: imgElement });
            }, 500); // 500ms长按触发
        });

        // 取消长按
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

// 处理表情上传
function handleStickerUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    // 检查文件类型
    const validTypes = ['image/png', 'image/jpeg', 'image/gif'];
    if (!validTypes.includes(file.type)) {
        alert('请选择 PNG / JPG / GIF 格式的图片！');
        return;
    }

    const reader = new FileReader();

    reader.onload = (e) => {
        try {
            const stickerDataUrl = e.target.result;

            // 添加到表情列表
            appState.stickers.push(stickerDataUrl);

            // 保存到本地存储
            saveToStorage();

            // 重新渲染表情面板
            renderStickers();

            alert('✅ 表情添加成功！');
        } catch (error) {
            console.error('处理表情失败:', error);
            alert('表情上传失败，请重试。');
        }
    };

    reader.onerror = () => {
        alert('读取表情失败，请重试。');
    };

    reader.readAsDataURL(file);
    event.target.value = '';
}

// 发送表情
function sendSticker(stickerDataUrl) {
    if (appState.isLoading) return;

    // 更新最后聊天时间
    window.lastChatTime = Date.now();

    // 更新用户最后消息时间（用于主动关心消息触发控制）
    activeCareState.lastUserMessageTime = Date.now();

    // 创建图片消息
    const userMessage = {
        id: Date.now(),
        type: 'image',
        content: stickerDataUrl,
        role: 'user',
        timestamp: new Date().toISOString(),
        read: false,
        replyTo: appState.quotedMessage ? appState.quotedMessage.id : null
    };

    // 添加到消息列表并渲染
    appState.messages.push(userMessage);
    renderMessage(userMessage);

    // 清空引用（如果有）
    cancelQuote();

    scrollToBottom();
    saveToStorage();

    // 500ms 后标记为已读
    setTimeout(() => {
        markAsRead(userMessage.id);
    }, 500);

    // 模拟回复延迟
    simulateBotReply();

    // 关闭表情面板
    DOM.stickerPanel.style.display = 'none';
}

// 处理表情长按删除
function handleStickerLongPress(event) {
    const imgElement = event.target;
    const stickerDataUrl = imgElement.src;

    if (confirm('确定要删除这个表情吗？')) {
        // 从表情列表中删除
        appState.stickers = appState.stickers.filter(sticker => sticker !== stickerDataUrl);

        // 保存到本地存储
        saveToStorage();

        // 重新渲染表情面板
        renderStickers();
    }
}

// 打卡日历功能
let currentDate = new Date();
let checkinData = {};
let selectedDate = null;

// 打开日历模态框
function openCalendar() {
    // 加载打卡数据
    loadCheckinData();

    // 渲染日历
    renderCalendar();

    // 设置默认选中今天
    selectedDate = new Date();

    // 渲染今天的日记
    renderDiary(selectedDate);

    // 显示模态框
    DOM.calendarModal.style.display = 'flex';
}

// 关闭日历模态框
function closeCalendar() {
    DOM.calendarModal.style.display = 'none';
}

// 加载打卡数据
function loadCheckinData() {
    try {
        const savedData = localStorage.getItem(CONFIG.STORAGE_KEYS.CHECKIN_DATA);
        checkinData = savedData ? JSON.parse(savedData) : {};
    } catch (error) {
        console.error('加载打卡数据失败:', error);
        checkinData = {};
    }
}

// 保存打卡数据
function saveCheckinData() {
    try {
        localStorage.setItem(CONFIG.STORAGE_KEYS.CHECKIN_DATA, JSON.stringify(checkinData));
    } catch (error) {
        console.error('保存打卡数据失败:', error);
    }
}

// 渲染日历
function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // 获取今天的日期（YYYY-MM-DD）
    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDay = today.getDate();
    const todayDateString = getDateKey(today);

    // 更新月份标题
    DOM.currentMonth.textContent = `${year}年 ${month + 1}月`;

    // 清空日历网格（保留星期标题）
    const dayTitles = DOM.calendarGrid.querySelectorAll('.day-title');
    DOM.calendarGrid.innerHTML = '';
    dayTitles.forEach(title => {
        DOM.calendarGrid.appendChild(title);
    });

    // 获取当前月份的第一天
    const firstDay = new Date(year, month, 1);
    // 获取第一天是星期几（0是周日，1是周一，...，6是周六）
    const firstDayOfWeek = firstDay.getDay();
    // 调整为周一为第一天（0是周一，1是周二，...，6是周日）
    const adjustedFirstDay = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;

    // 获取当前月份的天数
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    // 获取上个月的天数
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    // 检查当前显示的月份是否包含今天
    const isCurrentMonthToday = (year === todayYear && month === todayMonth);

    // 渲染上个月的剩余天数
    for (let i = adjustedFirstDay - 1; i >= 0; i--) {
        const day = daysInPrevMonth - i;
        const date = new Date(year, month - 1, day);
        const dayCell = createDayCell(date, false, isCurrentMonthToday, todayDateString, todayDay);
        dayCell.classList.add('other-month');
        DOM.calendarGrid.appendChild(dayCell);
    }

    // 渲染当前月份的天数
    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        const dayCell = createDayCell(date, true, isCurrentMonthToday, todayDateString, todayDay);
        DOM.calendarGrid.appendChild(dayCell);
    }

    // 渲染下个月的天数，直到填满整个网格
    const totalCells = DOM.calendarGrid.children.length;
    const remainingCells = 42 - totalCells; // 6行 × 7列 = 42个格子
    for (let day = 1; day <= remainingCells; day++) {
        const date = new Date(year, month + 1, day);
        const dayCell = createDayCell(date, false, isCurrentMonthToday, todayDateString, todayDay);
        dayCell.classList.add('other-month');
        DOM.calendarGrid.appendChild(dayCell);
    }

    // 更新统计信息
    updateCheckinStats();
}

// 创建日期格子
function createDayCell(date, isCurrentMonth, isCurrentMonthToday, todayDateString, todayDay) {
    const dayCell = document.createElement('div');
    dayCell.className = 'day-cell';

    const day = date.getDate();
    dayCell.textContent = day;

    // 获取当前日期的字符串格式
    const currentDateString = getDateKey(date);
    const currentTime = new Date();
    const today = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate());

    // 判断日期类型
    const isToday = (currentDateString === todayDateString);
    const isPastDate = date < today;
    const isFutureDate = date > today;

    // 检查是否已打卡
    const dateKey = getDateKey(date);
    const isChecked = !!checkinData[dateKey];

    // 根据日期状态添加不同样式
    if (isToday) {
        // 今天的日期样式
        dayCell.classList.add('today');
        if (isChecked) {
            dayCell.classList.add('checked');
        }
    } else if (isPastDate && isChecked) {
        // 过去已打卡的日期样式
        dayCell.classList.add('past-checked');
    } else if (isPastDate && !isChecked) {
        // 过去未打卡的日期，禁用
        dayCell.classList.add('disabled');
    } else if (isFutureDate) {
        // 未来日期，禁用
        dayCell.classList.add('disabled');
    }

    // 绑定点击事件
    if (isCurrentMonth && (isToday || (isPastDate && isChecked))) {
        // 今天和过去已打卡的日期允许点击，用于查看日记
        dayCell.addEventListener('click', () => {
            // 设置选中日期
            selectedDate = date;
            // 渲染该日期的日记
            renderDiary(selectedDate);
        });
    }

    return dayCell;
}

// 获取日期键（格式：YYYY-MM-DD）
function getDateKey(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// 渲染日记列表
function renderDiary(date) {
    const dateKey = getDateKey(date);
    const dayData = checkinData[dateKey];

    // 清空日记列表
    DOM.diaryList.innerHTML = '';

    if (dayData && dayData.notes && dayData.notes.length > 0) {
        // 渲染历史日记
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

    // 清空输入框
    DOM.diaryInput.value = '';
}

// 提交日记
function submitDiary() {
    const content = DOM.diaryInput.value.trim();
    if (!content || !selectedDate) {
        return;
    }

    const dateKey = getDateKey(selectedDate);
    const now = new Date();
    const timeStr = now.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });

    // 创建日记对象
    const note = {
        time: timeStr,
        content: content,
        timestamp: now.getTime()
    };

    // 保存日记
    let isFirstCheckinToday = !checkinData[dateKey];
    if (isFirstCheckinToday) {
        // 首次打卡，创建新的打卡记录
        checkinData[dateKey] = {
            notes: [note]
        };
    } else {
        // 已打卡，补充或修改日记
        if (!checkinData[dateKey].notes) {
            checkinData[dateKey].notes = [];
        }
        checkinData[dateKey].notes.push(note);
    }

    // 保存数据
    saveCheckinData();

    // 更新统计信息
    updateCheckinStats();

    // 重新渲染日历和日记
    renderCalendar();
    renderDiary(selectedDate);

    // 如果是今天第一次打卡，添加亲密度积分
    if (isFirstCheckinToday) {
        const today = new Date();
        if (date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()) {

            // 每日打卡 +5 点
            addIntimacyPoints(5, '每日打卡');

            // 重新计算连续打卡天数
            const streak = parseInt(DOM.streakCount.textContent);
            // 如果连续打卡天数 >=1，额外 +5 点
            if (streak >= 1) {
                addIntimacyPoints(5, '连续打卡');
            }
        }
    }
}

// 更新打卡统计信息
function updateCheckinStats() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // 计算本月累计打卡天数
    let monthlyCount = 0;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    for (let day = 1; day <= daysInMonth; day++) {
        const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        if (checkinData[dateKey]) {
            monthlyCount++;
        }
    }
    DOM.checkinCount.textContent = monthlyCount;

    // 计算连续打卡天数
    let streak = 0;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // 从今天开始向前检查
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

// 处理上下文菜单
function handleContextMenu(e) {
    e.preventDefault();

    const messageElement = e.target.closest('.message');
    if (!messageElement) return;

    const messageId = parseInt(messageElement.dataset.id);
    const message = appState.messages.find(msg => msg.id === messageId);
    if (!message) return;

    // 保存当前选中的消息
    appState.quotedMessage = message;

    // 显示上下文菜单
    const rect = messageElement.getBoundingClientRect();
    const containerRect = DOM.messagesContainer.getBoundingClientRect();

    DOM.contextMenu.style.display = 'block';
    DOM.contextMenu.style.left = `${e.clientX - containerRect.left}px`;
    DOM.contextMenu.style.top = `${e.clientY - containerRect.top}px`;
}

// 引用选中的消息
function quoteSelectedMessage() {
    if (!appState.quotedMessage) return;

    // 显示引用预览
    const previewText = appState.quotedMessage.text.substring(0, 20) + (appState.quotedMessage.text.length > 20 ? '...' : '');
    DOM.quoteContent.textContent = previewText;
    DOM.quotePreview.style.display = 'flex';

    // 关闭上下文菜单
    DOM.contextMenu.style.display = 'none';

    // 聚焦输入框
    DOM.messageInput.focus();
}

// 取消引用
function cancelQuote() {
    appState.quotedMessage = null;
    DOM.quotePreview.style.display = 'none';
    DOM.quoteContent.textContent = '';
}

// 检查长时间未写日记并触发提醒
function checkChatDiaryReminder() {
    // 找出最后一次记录的日期
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

    // 2天未写 → 20% 触发
    if (gap >= 2 && chance(0.20)) {
        aoyinChatRemind("狗狗，今天还没写一点给我…要不要写一下？");
    }
}

// 向聊天窗口插入敖隐提示
function aoyinChatRemind(text) {
    // 检查自动消息触发频率
    const now = Date.now();
    const timeSinceLast = now - appState.lastAutoMessageTime;

    // 同次打开不超过3条，间隔至少45秒
    if (appState.autoMessageCount >= 3 || timeSinceLast < 45000) {
        return;
    }

    // 创建机器人消息
    const botMessage = {
        id: Date.now(),
        text: text,
        role: 'bot',
        timestamp: new Date().toISOString(),
        read: true,
        replyTo: null
    };

    // 添加到消息列表并渲染
    appState.messages.push(botMessage);
    renderMessage(botMessage);

    scrollToBottom();
    saveToStorage();

    // 更新自动消息计数和时间
    appState.autoMessageCount++;
    appState.lastAutoMessageTime = now;
}

// 发送消息
function sendMessage() {
    const messageText = DOM.messageInput.value.trim();

    if (!messageText || appState.isLoading) {
        return;
    }

    // 更新最后聊天时间
    window.lastChatTime = Date.now();

    // 更新用户最后消息时间（用于主动关心消息触发控制）
    activeCareState.lastUserMessageTime = Date.now();

    // 创建用户消息
    const userMessage = {
        id: Date.now(),
        text: messageText,
        role: 'user',
        timestamp: new Date().toISOString(),
        read: false,
        replyTo: appState.quotedMessage ? appState.quotedMessage.id : null
    };

    // 添加到消息列表并渲染
    appState.messages.push(userMessage);
    renderMessage(userMessage);

    // 清空输入框和引用
    DOM.messageInput.value = '';
    cancelQuote();

    scrollToBottom();
    saveToStorage();

    // 500ms 后标记为已读
    setTimeout(() => {
        markAsRead(userMessage.id);
    }, 500);

    // 添加亲密度点数（蓝心按钮不加点，由其他方式控制）
    let points = 0;

    // 1. 每条消息 +1
    points += 1;

    // 2. 超过10字 +1
    if (messageText.length > 10) {
        points += 1;
    }

    // 3. 包含亲密词 +2
    const intimateWords = ['贴贴', '抱抱', '亲亲', '想你', '喜欢你', '爱你', '可爱', '宝贝', '亲爱的'];
    if (intimateWords.some(word => messageText.includes(word))) {
        points += 2;
    }

    // 4. 图片或表情消息 +1
    // 检查是否包含图片或表情
    const hasImage = /<img/.test(messageText);
    const hasEmoji = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u.test(messageText);
    if (hasImage || hasEmoji) {
        points += 1;
    }

    // 添加亲密度点数
    addIntimacyPoints(points, '发送消息');

    // 模拟回复延迟
    simulateBotReply();
}

// 模拟机器人回复
function simulateBotReply() {
    appState.isLoading = true;

    // 显示加载状态
    const loadingElement = createLoadingElement();
    DOM.messagesContainer.appendChild(loadingElement);
    scrollToBottom();

    // 随机延迟 1-2 秒
    const delay = Math.random() * 1000 + 1000;

    setTimeout(() => {
        // 移除加载状态
        loadingElement.remove();

        // 随机决定是否插入动作回复
        let shouldInsertAction = Math.random() < CONFIG.ACTION_REPLY_CHANCE;

        if (shouldInsertAction) {
            // 插入动作回复
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

            // 再次延迟后发送普通回复
            setTimeout(() => {
                sendNormalReply();
            }, 500);
        } else {
            // 直接发送普通回复
            sendNormalReply();
        }

        appState.isLoading = false;
    }, delay);
}

// 发送普通回复
function sendNormalReply() {
    // 随机决定是发送文本回复还是表情包回复
    const useSticker = appState.stickers.length > 0 && Math.random() < 0.3; // 30%概率发送表情包

    if (useSticker) {
        // 随机选择一个用户添加的表情包
        const randomSticker = appState.stickers[Math.floor(Math.random() * appState.stickers.length)];

        // 创建表情包消息
        const botMessage = {
            id: Date.now(),
            type: 'image',
            content: randomSticker,
            role: 'bot',
            timestamp: new Date().toISOString()
        };

        // 添加到消息列表并渲染
        appState.messages.push(botMessage);
        renderMessage(botMessage);
        scrollToBottom();
        saveToStorage();
    } else {
        // 随机选择文本回复
        const randomReply = appState.replies[Math.floor(Math.random() * appState.replies.length)];

        // 创建机器人消息
        const botMessage = {
            id: Date.now(),
            text: randomReply,
            role: 'bot',
            timestamp: new Date().toISOString()
        };

        // 添加到消息列表并渲染
        appState.messages.push(botMessage);
        renderMessage(botMessage);
        scrollToBottom();
        saveToStorage();
    }
}

// 触发拍拍动作
function triggerPatPat() {
    // 播放震动（如果浏览器支持）
    if (navigator.vibrate) {
        navigator.vibrate(100);
    }

    // 创建系统消息
    const systemMessage = {
        id: Date.now(),
        text: "你拍拍了敖隐 👋",
        role: 'system',
        timestamp: new Date().toISOString()
    };

    // 添加到消息列表并渲染
    appState.messages.push(systemMessage);
    renderMessage(systemMessage);
    scrollToBottom();

    // 延迟后发送回应
    setTimeout(() => {
        // 随机决定是发送文本回复还是表情包回复
        const useSticker = appState.stickers.length > 0 && Math.random() < 0.3; // 30%概率发送表情包

        if (useSticker) {
            // 随机选择一个用户添加的表情包
            const randomSticker = appState.stickers[Math.floor(Math.random() * appState.stickers.length)];

            // 创建表情包消息
            const botMessage = {
                id: Date.now(),
                type: 'image',
                content: randomSticker,
                role: 'bot',
                timestamp: new Date().toISOString()
            };

            // 添加到消息列表并渲染
            appState.messages.push(botMessage);
            renderMessage(botMessage);
            scrollToBottom();
            saveToStorage();
        } else {
            // 从回复库中随机选择文本回复
            const randomReply = appState.replies[Math.floor(Math.random() * appState.replies.length)];

            // 创建机器人消息
            const botMessage = {
                id: Date.now(),
                text: randomReply,
                role: 'bot',
                timestamp: new Date().toISOString()
            };

            // 添加到消息列表并渲染
            appState.messages.push(botMessage);
            renderMessage(botMessage);
            scrollToBottom();
            saveToStorage();
        }
    }, 500);
}

// 标记消息为已读
function markAsRead(messageId) {
    const message = appState.messages.find(msg => msg.id === messageId);
    if (message) {
        message.read = true;
        saveToStorage();

        // 更新已读状态显示
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
                readStatusElement.textContent = '已读';
            }
        }
    }
}

// 创建加载状态元素
function createLoadingElement() {
    const messageElement = document.createElement('div');
    messageElement.className = 'message bot';
    messageElement.dataset.id = Date.now();

    // 头像
    const avatarElement = document.createElement('div');
    avatarElement.className = 'avatar';

    // 设置头像内容
    const avatarData = appState.avatars.bot;
    const avatarText = '敖';

    if (avatarData) {
        // 如果有头像图片，使用图片
        const imgElement = document.createElement('img');
        imgElement.src = avatarData;
        imgElement.alt = avatarText;
        imgElement.style.width = '100%';
        imgElement.style.height = '100%';
        imgElement.style.objectFit = 'cover';
        avatarElement.appendChild(imgElement);
    } else {
        // 否则显示文字
        avatarElement.textContent = avatarText;
    }

    // 消息内容
    const contentElement = document.createElement('div');
    contentElement.className = 'message-content';

    // 气泡
    const bubbleElement = document.createElement('div');
    bubbleElement.className = 'message-bubble';

    // 加载动画
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

// 渲染所有消息
function renderMessages() {
    DOM.messagesContainer.innerHTML = '';

    appState.messages.forEach(message => {
        renderMessage(message);
    });

    scrollToBottom();
}

// 渲染单条消息
function renderMessage(message) {
    // 系统消息特殊处理
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

    // 头像
    const avatarElement = document.createElement('div');
    // 给敖隐头像添加id
    avatarElement.className = 'avatar';
    if (!message.isUser) {
        avatarElement.id = 'aoAvatar';
    }

    // 设置头像内容
    const isUser = message.role === 'user';
    const avatarData = isUser ? appState.avatars.my : appState.avatars.bot;
    const avatarText = isUser ? '我' : '敖';

    if (avatarData) {
        // 如果有头像图片，使用图片
        const imgElement = document.createElement('img');
        imgElement.src = avatarData;
        imgElement.alt = avatarText;
        imgElement.style.width = '100%';
        imgElement.style.height = '100%';
        imgElement.style.objectFit = 'cover';
        avatarElement.appendChild(imgElement);
    } else {
        // 否则显示文字
        avatarElement.textContent = avatarText;
    }

    // 消息内容
    const contentElement = document.createElement('div');
    contentElement.className = 'message-content';

    // 动作回复
    if (message.isAction) {
        const actionElement = document.createElement('div');
        actionElement.className = 'action-reply';
        actionElement.textContent = message.text;
        contentElement.appendChild(actionElement);
    } else {
        // 引用消息
        if (message.replyTo) {
            const quotedMsg = appState.messages.find(msg => msg.id === message.replyTo);
            if (quotedMsg) {
                const quoteElement = document.createElement('div');
                quoteElement.className = 'quote';
                quoteElement.textContent = quotedMsg.text || (quotedMsg.type === 'image' ? '[图片]' : '');
                contentElement.appendChild(quoteElement);
            }
        }

        // 聊天气泡
        const bubbleElement = document.createElement('div');
        bubbleElement.className = 'message-bubble';

        // 图片消息
        if (message.type === 'image') {
            const imgElement = document.createElement('img');
            imgElement.className = 'msg-image';
            imgElement.src = message.content;
            imgElement.alt = '图片消息';
            imgElement.style.maxWidth = '200px';
            imgElement.style.maxHeight = '200px';
            imgElement.style.borderRadius = '8px';
            imgElement.style.objectFit = 'cover';
            bubbleElement.appendChild(imgElement);
        } else {
            // 文本消息
            bubbleElement.textContent = message.text;
        }

        // 消息时间和已读状态
        const footerElement = document.createElement('div');
        footerElement.className = 'message-footer';

        const timeElement = document.createElement('span');
        timeElement.className = 'message-time';
        timeElement.textContent = formatTime(message.timestamp);
        footerElement.appendChild(timeElement);

        // 已读状态（仅用户消息）
        if (isUser) {
            const readStatusElement = document.createElement('span');
            readStatusElement.className = 'read-status';
            readStatusElement.textContent = message.read ? '已读' : '';
            footerElement.appendChild(readStatusElement);
        }

        bubbleElement.appendChild(footerElement);
        contentElement.appendChild(bubbleElement);
    }

    // 组装消息元素
    if (isUser) {
        messageElement.appendChild(contentElement);
        messageElement.appendChild(avatarElement);
    } else {
        messageElement.appendChild(avatarElement);
        messageElement.appendChild(contentElement);
    }

    DOM.messagesContainer.appendChild(messageElement);
}

// 格式化时间
function formatTime(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
}

// 滚动到底部
function scrollToBottom() {
    DOM.chatContent.scrollTop = DOM.chatContent.scrollHeight;
}

// 字体大小调节逻辑
function updateFontSize(size) {
    document.documentElement.style.setProperty("--dynamic-font-size", size + "px");
    document.getElementById("fontSizeValue").innerText = size + "px";

    // 保存到 localStorage
    localStorage.setItem("dynamicFontSize", size);
}

// 页面加载时自动恢复字号
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

// 更新字卡库选择列表
function updateCardLibrarySelect() {
    if (!DOM.cardLibrarySelect) return;
    
    // 清空现有选项
    DOM.cardLibrarySelect.innerHTML = '';
    
    // 添加所有字卡库选项
    Object.entries(appState.cardLibraries.libraries).forEach(([id, library]) => {
        const option = document.createElement('option');
        option.value = id;
        option.textContent = library.name;
        if (id === appState.cardLibraries.currentId) {
            option.selected = true;
        }
        DOM.cardLibrarySelect.appendChild(option);
    });
}

// 节流函数 - 用于限制IndexedDB写入频率
function throttle(func, limit) {
    let inThrottle;
    let lastArgs;
    let lastContext;
    
    return function(...args) {
        const context = this;
        lastArgs = args;
        lastContext = context;
        
        if (!inThrottle) {
            // 立即执行一次
            func.apply(context, args);
            inThrottle = true;
            
            // 设置定时器，限制执行频率
            setTimeout(() => {
                inThrottle = false;
                // 如果在定时器期间有新的调用，立即执行一次
                if (lastArgs !== args || lastContext !== context) {
                    func.apply(lastContext, lastArgs);
                }
            }, limit);
        }
    }
}

// 导入字卡库
function importCardLibrary(file) {
    const reader = new FileReader();
    
    reader.onload = (e) => {
        try {
            // 移除可能的BOM头
            let content = e.target.result;
            if (content.charCodeAt(0) === 0xFEFF) {
                content = content.slice(1);
            }
            
            // 解析JSON
            const importedData = JSON.parse(content);
            
            // 详细验证导入数据格式
            let errorMessage = '';
            if (typeof importedData.name !== 'string' || !importedData.name.trim()) {
                errorMessage += '缺少有效的字卡库名称（name字段必须是非空字符串）\n';
            }
            if (!Array.isArray(importedData.cards)) {
                errorMessage += '缺少有效的字卡数组（cards字段必须是数组类型）\n';
            } else if (importedData.cards.length === 0) {
                errorMessage += '字卡数组不能为空\n';
            }
            
            // 验证字卡格式
            for (let i = 0; i < importedData.cards.length; i++) {
                if (typeof importedData.cards[i] !== 'string') {
                    errorMessage += `第${i+1}个字卡不是字符串类型\n`;
                }
            }
            
            if (errorMessage) {
                alert('字卡库格式不正确：\n' + errorMessage + '\n\n正确格式示例：\n{\n  "name": "我的字卡库",\n  "cards": [\n    "你好呀～",\n    "抱抱你～",\n    "贴贴！！"\n  ]\n}');
                return;
            }
            
            // 生成唯一ID
            const libraryId = `library_${Date.now()}`;
            
            // 添加到字卡库列表
            appState.cardLibraries.libraries[libraryId] = {
                name: importedData.name,
                cards: importedData.cards
            };
            
            // 保存到存储
            saveToStorage();
            
            // 更新选择列表
            updateCardLibrarySelect();
            
            alert(`✅ 成功导入字卡库：${importedData.name}`);
        } catch (error) {
            console.error('导入字卡库失败:', error);
            alert(`导入字卡库失败：\n${error.message}\n\n请检查文件是否为有效的JSON格式！\n\n正确格式示例：\n{\n  "name": "我的字卡库",\n  "cards": [\n    "你好呀～",\n    "抱抱你～",\n    "贴贴！！"\n  ]\n}`);
        }
    };
    
    reader.readAsText(file);
}

// 切换字卡库
function switchCardLibrary(libraryId) {
    if (!appState.cardLibraries.libraries[libraryId]) return;
    
    // 更新当前选中的字卡库
    appState.cardLibraries.currentId = libraryId;
    
    // 更新回复池
    appState.replies = appState.cardLibraries.libraries[libraryId].cards;
    
    // 保存到存储
    saveToStorage();
    
    alert(`✅ 已切换到字卡库：${appState.cardLibraries.libraries[libraryId].name}`);
}

// 删除字卡库
function deleteCardLibrary(libraryId) {
    // 不能删除默认字卡库
    if (libraryId === 'default') {
        alert('❌ 不能删除默认字卡库！');
        return;
    }
    
    // 确认删除
    if (!confirm(`确定要删除字卡库：${appState.cardLibraries.libraries[libraryId].name} 吗？`)) {
        return;
    }
    
    // 删除字卡库
    delete appState.cardLibraries.libraries[libraryId];
    
    // 如果删除的是当前选中的字卡库，切换到默认字卡库
    if (appState.cardLibraries.currentId === libraryId) {
        appState.cardLibraries.currentId = 'default';
        appState.replies = appState.cardLibraries.libraries.default.cards;
    }
    
    // 保存到存储
    saveToStorage();
    
    // 更新选择列表
    updateCardLibrarySelect();
    
    alert('✅ 字卡库已删除！');
}

// 初始化字卡库管理
function initCardLibraryManagement() {
    // 更新初始选择列表
    updateCardLibrarySelect();
    
    // 绑定导入事件
    if (DOM.importCardLibraryInput) {
        DOM.importCardLibraryInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                importCardLibrary(file);
                e.target.value = ''; // 重置文件输入
            }
        });
    }
    
    // 绑定切换事件
    if (DOM.cardLibrarySelect) {
        DOM.cardLibrarySelect.addEventListener('change', (e) => {
            switchCardLibrary(e.target.value);
        });
    }
    
    // 绑定删除事件
    if (DOM.deleteCardLibraryBtn) {
        DOM.deleteCardLibraryBtn.addEventListener('click', () => {
            deleteCardLibrary(appState.cardLibraries.currentId);
        });
    }
}

// 初始化设置面板
function initSettingsPanel() {
    // 主题模式选项
    const themeOptions = document.querySelectorAll('[data-theme]');
    themeOptions.forEach(option => {
        option.addEventListener('click', () => {
            const theme = option.dataset.theme;
            appState.settings.theme = theme;

            // 更新活动状态
            themeOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');

            // 应用设置
            applySettings();
            saveSettings();
        });
    });

    // 设置主题初始活动状态
    document.querySelector(`[data-theme="${appState.settings.theme}"]`).classList.add('active');
    
    // 初始化字卡库管理
    initCardLibraryManagement();
}

// 保存设置到本地存储
function saveSettings() {
    localStorage.setItem(CONFIG.STORAGE_KEYS.SETTINGS, JSON.stringify(appState.settings));
}

// 处理背景图上传
function handleBgUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
        try {
            const bgDataUrl = e.target.result;
            // 应用背景图
            document.documentElement.style.setProperty('--background-image', `url(${bgDataUrl})`);
            // 保存到本地存储
            localStorage.setItem(CONFIG.STORAGE_KEYS.BACKGROUND_IMAGE, bgDataUrl);
        } catch (error) {
            console.error('处理背景图失败:', error);
            alert('上传背景图失败，请重试。');
        }
    };

    reader.onerror = () => {
        alert('读取背景图失败，请重试。');
    };

    reader.readAsDataURL(file);
    event.target.value = '';
}

// 重置背景
function resetBackground() {
    document.documentElement.style.setProperty('--background-image', 'none');
    localStorage.removeItem(CONFIG.STORAGE_KEYS.BACKGROUND_IMAGE);
}

// 处理头像上传
function handleAvatarUpload(event, type) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
        try {
            const avatarDataUrl = e.target.result;
            appState.avatars[type] = avatarDataUrl;

            // 保存到本地存储
            localStorage.setItem(type === 'my' ? CONFIG.STORAGE_KEYS.MY_AVATAR : CONFIG.STORAGE_KEYS.BOT_AVATAR, avatarDataUrl);

            // 重新渲染消息，更新头像
            renderMessages();

            alert(`✅ ${type === 'my' ? '我的' : '敖隐'}头像上传成功！`);
        } catch (error) {
            console.error('处理头像失败:', error);
            alert('头像上传失败，请重试。');
        }
    };

    reader.onerror = () => {
        alert('读取头像失败，请重试。');
    };

    reader.readAsDataURL(file);
    event.target.value = '';
}

// 重置头像
function resetAvatars() {
    // 重置头像状态
    appState.avatars = {
        my: null,
        bot: null
    };

    // 清除本地存储
    localStorage.removeItem(CONFIG.STORAGE_KEYS.MY_AVATAR);
    localStorage.removeItem(CONFIG.STORAGE_KEYS.BOT_AVATAR);

    // 重新渲染消息
    renderMessages();

    alert('✅ 头像已恢复默认！');
}

// 处理聊天记录导入
function handleChatImport(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
        try {
            const jsonData = JSON.parse(e.target.result);

            if (jsonData.messages && Array.isArray(jsonData.messages)) {
                // 合并或替换聊天记录
                if (confirm('是否替换当前聊天记录？\n\n点击确定：替换现有记录\n点击取消：合并到现有记录')) {
                    appState.messages = jsonData.messages;
                } else {
                    appState.messages = [...appState.messages, ...jsonData.messages];
                }

                // 重新渲染
                renderMessages();
                saveToStorage();
                alert('聊天记录导入成功！');
            } else {
                alert('JSON 文件格式不正确，请确保包含 messages 数组。');
            }
        } catch (error) {
            console.error('解析 JSON 文件失败:', error);
            alert('解析聊天记录失败，请检查文件格式。');
        }
    };

    reader.onerror = () => {
        alert('读取文件失败，请重试。');
    };

    reader.readAsText(file);
    event.target.value = '';
}

// 导出聊天记录
function exportChatHistory() {
    if (appState.messages.length === 0) {
        alert('没有聊天记录可以导出。');
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

// 处理回复库导入
function handleRepliesImport(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
        try {
            const jsonData = JSON.parse(e.target.result);

            // 兼容 customReplies 和 replies 两种格式
            let newReplies = [];
            if (jsonData.customReplies && Array.isArray(jsonData.customReplies)) {
                newReplies = jsonData.customReplies;
            } else if (jsonData.replies && Array.isArray(jsonData.replies)) {
                newReplies = jsonData.replies;
            }

            if (newReplies.length > 0) {
                appState.replies = newReplies;
                saveToStorage();
                alert('回复库导入成功！');
            } else {
                alert('JSON 文件格式不正确，请确保包含 customReplies 或 replies 数组。');
            }
        } catch (error) {
            console.error('解析 JSON 文件失败:', error);
            alert('解析回复库失败，请检查文件格式。');
        }
    };

    reader.onerror = () => {
        alert('读取文件失败，请重试。');
    };

    reader.readAsText(file);
    event.target.value = '';
}




// 显示亲密度详情弹窗
function showIntimacyModal() {
    if (!DOM.intimacyModal) return;

    // 1. 计算恋爱天数
    const now = Date.now();
    const start = appState.startDate || now;
    const diffTime = Math.abs(now - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // 2. 计算聊天统计
    const totalCount = appState.messages.length;
    let todayCount = 0;
    const todayStr = formatDate(new Date());

    appState.messages.forEach(msg => {
        if (msg.role === 'user' && msg.timestamp.startsWith(todayStr)) {
            todayCount++;
        }
    });

    // 3. 亲密度数据
    const currentPoints = appState.intimacy.totalPoints;
    const currentLevel = appState.intimacy.level;
    const nextLevelDiff = 50 - (currentPoints % 50);

    // 4. 更新 DOM 并触发动画
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
            // 重置动画
            el.classList.remove('highlight-trigger');
            void el.offsetWidth; // 触发回流
            el.classList.add('highlight-trigger');
        }
    });

    // 5. 显示弹窗
    DOM.intimacyModal.style.display = 'flex';

    // 6. 加载自定义横幅
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

// 关闭亲密度详情弹窗
function closeIntimacyModal() {
    if (DOM.intimacyModal) {
        DOM.intimacyModal.style.display = 'none';
        // 不清除 banner 显示状态，因为再次打开会重新读取
    }
}

// 初始化横幅交互 (长按上传 / 双击重置)
function initBannerInteractions() {
    const banner = document.getElementById('intimacyBanner');
    const fileInput = document.getElementById('bannerUpload_New');
    let pressTimer;

    if (!banner || !fileInput) return;

    // 双击触发上传
    banner.addEventListener('dblclick', () => {
        fileInput.click();
    });

    // 长按触发重置
    banner.addEventListener('mousedown', () => {
        pressTimer = setTimeout(() => {
            if (localStorage.getItem('customIntimacyBanner')) {
                if (confirm('是否恢复默认样式的横幅？')) {
                    localStorage.removeItem('customIntimacyBanner');
                    banner.style.backgroundImage = 'none';
                    const symbol = banner.querySelector('.default-symbol');
                    if (symbol) symbol.style.display = 'block';
                }
            }
        }, 800);
    });

    banner.addEventListener('touchstart', () => {
        pressTimer = setTimeout(() => {
            if (localStorage.getItem('customIntimacyBanner')) {
                if (confirm('是否恢复默认样式的横幅？')) {
                    localStorage.removeItem('customIntimacyBanner');
                    banner.style.backgroundImage = 'none';
                    const symbol = banner.querySelector('.default-symbol');
                    if (symbol) symbol.style.display = 'block';
                }
            }
        }, 800);
    }, { passive: true });

    // 取消长按 (鼠标松开、移出、触摸结束、触摸滑动)
    const clearTimer = () => clearTimeout(pressTimer);

    banner.addEventListener('mouseup', clearTimer);
    banner.addEventListener('mouseleave', clearTimer);
    banner.addEventListener('touchend', clearTimer);
    banner.addEventListener('touchmove', clearTimer, { passive: true });

    // 文件选择处理
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // JS 端验证 (User Request #2)
        if (!file.type.startsWith('image/')) {
            alert('❌ 请选择图片文件');
            return;
        }

        // 使用 Canvas 压缩图片并保持格式 (User Request #3)
        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                // 限制最大宽度，防止过大
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

                // 动态导出格式
                const format = file.type.includes("png") ? "image/png" : "image/jpeg";
                // 压缩质量 0.8
                const dataUrl = canvas.toDataURL(format, 0.8);

                // 保存并更新UI
                try {
                    localStorage.setItem('customIntimacyBanner', dataUrl);

                    const symbol = banner.querySelector('.default-symbol');
                    banner.style.backgroundImage = `url(${dataUrl})`;
                    if (symbol) symbol.style.display = 'none';
                } catch (err) {
                    alert('图片过大，无法保存，请尝试更小的图片');
                    console.error('Storage failed:', err);
                }
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(file);
    });
}

// 统一的 CalendarModal 组件
class CalendarModal {
    constructor(options = {}) {
        this.modal = document.getElementById('calendarModal');
        this.overlay = this.modal.querySelector('.calendar-modal-overlay');
        this.content = this.modal.querySelector('.calendar-modal-content');
        this.closeBtn = this.modal.querySelector('.calendar-close-btn');
        this.navPrev = this.modal.querySelector('.prev-month');
        this.navNext = this.modal.querySelector('.next-month');
        this.dateDisplay = this.modal.querySelector('.current-date-display');
        this.daysContainer = this.modal.querySelector('.calendar-days');
        this.onSelect = options.onSelect || (() => {});
        this.selectedDate = options.selectedDate || new Date();
        this.currentDate = new Date(this.selectedDate);
        this.isOpen = false;

        this.init();
    }

    init() {
        // 绑定事件
        this.closeBtn.addEventListener('click', () => this.close());
        this.overlay.addEventListener('click', () => this.close());
        this.navPrev.addEventListener('click', () => this.goToPrevMonth());
        this.navNext.addEventListener('click', () => this.goToNextMonth());
        
        // 初始化日历
        this.renderCalendar();
    }

    open(options = {}) {
        if (options.onSelect) {
            this.onSelect = options.onSelect;
        }
        if (options.selectedDate) {
            this.selectedDate = options.selectedDate;
            this.currentDate = new Date(this.selectedDate);
            this.renderCalendar();
        }
        this.modal.style.display = 'flex';
        this.isOpen = true;
        
        // 防止背景滚动
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.modal.style.display = 'none';
        this.isOpen = false;
        
        // 恢复背景滚动
        document.body.style.overflow = 'auto';
    }

    goToPrevMonth() {
        this.currentDate.setMonth(this.currentDate.getMonth() - 1);
        this.renderCalendar();
    }

    goToNextMonth() {
        this.currentDate.setMonth(this.currentDate.getMonth() + 1);
        this.renderCalendar();
    }

    renderCalendar() {
        // 更新月份显示
        const year = this.currentDate.getFullYear();
        const month = this.currentDate.getMonth();
        this.dateDisplay.textContent = `${year}年${month + 1}月`;

        // 清空日期容器
        this.daysContainer.innerHTML = '';

        // 获取月份第一天和最后一天
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);

        // 获取月份第一天是星期几（0 = 星期日）
        const startDay = firstDay.getDay();
        
        // 获取上个月的最后一天
        const prevMonthLastDay = new Date(year, month, 0);

        // 渲染上个月的日期
        for (let i = startDay - 1; i >= 0; i--) {
            const day = prevMonthLastDay.getDate() - i;
            const dayElement = this.createDayElement(day, false, year, month - 1);
            dayElement.classList.add('other-month');
            this.daysContainer.appendChild(dayElement);
        }

        // 渲染当前月份的日期
        for (let day = 1; day <= lastDay.getDate(); day++) {
            const dayElement = this.createDayElement(day, true, year, month);
            this.daysContainer.appendChild(dayElement);
        }

        // 渲染下个月的日期
        const totalDays = startDay + lastDay.getDate();
        const remainingDays = 42 - totalDays; // 6行 × 7列 = 42个格子
        for (let day = 1; day <= remainingDays; day++) {
            const dayElement = this.createDayElement(day, false, year, month + 1);
            dayElement.classList.add('other-month');
            this.daysContainer.appendChild(dayElement);
        }
    }

    createDayElement(day, isCurrentMonth, year, month) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.textContent = day;

        const date = new Date(year, month, day);
        const today = new Date();
        
        // 检查是否是今天
        if (date.toDateString() === today.toDateString()) {
            dayElement.classList.add('today');
        }

        // 检查是否是选中日期
        if (this.selectedDate && date.toDateString() === this.selectedDate.toDateString()) {
            dayElement.classList.add('selected');
        }

        // 点击事件
        dayElement.addEventListener('click', () => {
            this.selectedDate = new Date(year, month, day);
            this.renderCalendar();
            this.onSelect(this.selectedDate);
            this.close();
        });

        return dayElement;
    }
}

// 全局 CalendarModal 实例
let calendarModal;

// 打印版本号确认更新
console.log('App Version: v8 (New ID + Accept *)');

// 初始化应用 (确保 DOM 加载后执行)
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        // 初始化 CalendarModal
        calendarModal = new CalendarModal();
        initApp();
        initBannerInteractions();
    });
} else {
    // DOM 已经加载完成
    calendarModal = new CalendarModal();
    initApp();
    initBannerInteractions();
}

// ========================================
// 回复库管理功能
// ========================================

// 回复库状态
let replyLibraryState = {
    currentTab: 'custom', // 'custom' or 'system'
    searchKeyword: ''
};

// DOM 元素
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

// 初始化回复库 DOM 元素
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

// 打开回复库模态框
function openReplyLibraryModal() {
    if (!replyLibraryDOM.modal) initReplyLibraryDOM();

    replyLibraryDOM.modal.style.display = 'flex';
    replyLibraryState.searchKeyword = '';
    if (replyLibraryDOM.searchInput) {
        replyLibraryDOM.searchInput.value = '';
    }
    renderReplyList();
}

// 关闭回复库模态框
function closeReplyLibraryModal() {
    if (replyLibraryDOM.modal) {
        replyLibraryDOM.modal.style.display = 'none';
    }
}

// 切换标签函数
function switchReplyTab(tabName) {
    replyLibraryState.currentTab = tabName;

    // 更新标签按钮状态
    replyLibraryDOM.tabs.forEach(tab => {
        if (tab.dataset.tab === tabName) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    // 重新渲染列表
    renderReplyList();
}

// 渲染回复列表
function renderReplyList() {
    if (!replyLibraryDOM.replyList) return;

    const currentReplies = getCurrentReplies();
    const filteredReplies = filterReplies(currentReplies, replyLibraryState.searchKeyword);

    if (filteredReplies.length === 0) {
        replyLibraryDOM.replyList.innerHTML = `
            <div class="reply-empty">
            ${replyLibraryState.searchKeyword ? '没有找到匹配的回复' : '暂无回复,点击下方按钮添加'}
            </div>
        `;
        return;
    }

    replyLibraryDOM.replyList.innerHTML = filteredReplies.map((reply, index) => `
        <div class="reply-item" data-index="${index}">
            <div class="reply-text">${escapeHtml(reply)}</div>
            <div class="reply-actions">
                    <button class="reply-action-btn edit" onclick="editReply(${index})" title="编辑">✏️</button>
                    <button class="reply-action-btn delete" onclick="deleteReply(${index})" title="删除">🗑️</button>
            </div>
        </div>
    `).join('');
}

// 获取当前标签页的回复列表
function getCurrentReplies() {
    if (replyLibraryState.currentTab === 'custom') {
        return appState.replies || [];
    } else {
        // 系统预设使用 CONFIG.DEFAULT_REPLIES
        return CONFIG.DEFAULT_REPLIES || [];
    }
}

// 过滤回复
function filterReplies(replies, keyword) {
    if (!keyword) return replies;
    const lowerKeyword = keyword.toLowerCase();
    return replies.filter(reply =>
        reply.toLowerCase().includes(lowerKeyword)
    );
}

// 添加回复
function addReply() {
    const text = prompt('请输入新的回复内容：');
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
        alert('系统预设回复不可添加,请切换到"我的回复"标签页');
    }
}

// 编辑回复
function editReply(index) {
    const currentReplies = getCurrentReplies();
    const filteredReplies = filterReplies(currentReplies, replyLibraryState.searchKeyword);

    if (index < 0 || index >= filteredReplies.length) return;

    const oldText = filteredReplies[index];
    const newText = prompt('编辑回复内容:', oldText);

    if (newText === null || newText.trim() === '') return;

    const trimmedText = newText.trim();

    if (replyLibraryState.currentTab === 'custom') {
        // 找到原始索引
        const originalIndex = appState.replies.indexOf(oldText);
        if (originalIndex !== -1) {
            appState.replies[originalIndex] = trimmedText;
            saveToStorage();
            renderReplyList();
        }
    } else {
        alert('系统预设回复不可编辑');
    }
}

// 删除回复
function deleteReply(index) {
    const currentReplies = getCurrentReplies();
    const filteredReplies = filterReplies(currentReplies, replyLibraryState.searchKeyword);

    if (index < 0 || index >= filteredReplies.length) return;

    const textToDelete = filteredReplies[index];

    if (!confirm(`确定要删除这条回复吗？\n\n"${textToDelete}"`)) return;

    if (replyLibraryState.currentTab === 'custom') {
        // 找到原始索引并删除
        const originalIndex = appState.replies.indexOf(textToDelete);
        if (originalIndex !== -1) {
            appState.replies.splice(originalIndex, 1);
            saveToStorage();
            renderReplyList();
        }
    } else {
        alert('系统预设回复不可删除');
    }
}

// 搜索回复
function handleReplySearch(keyword) {
    replyLibraryState.searchKeyword = keyword;
    renderReplyList();
}

// 导出回复库
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

// 导入回复库
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

                // 兼容多种格式
                let newReplies = [];
                if (data.customReplies && Array.isArray(data.customReplies)) {
                    newReplies = data.customReplies;
                } else if (data.replies && Array.isArray(data.replies)) {
                    newReplies = data.replies;
                } else if (Array.isArray(data)) {
                    newReplies = data;
                }

                if (newReplies.length > 0) {
                    // 合并而不是替换
                    if (!appState.replies) {
                        appState.replies = [];
                    }

                    // 去重合并
                    newReplies.forEach(reply => {
                        if (!appState.replies.includes(reply)) {
                            appState.replies.push(reply);
                        }
                    });

                    saveToStorage();
                    renderReplyList();
                    alert(`成功导入 ${newReplies.length} 条回复！`);
                } else {
                    alert('JSON 文件格式不正确或为空');
                }
            } catch (error) {
                console.error('导入失败:', error);
                alert('导入失败,请检查文件格式');
            }
        };
        reader.readAsText(file);
    };

    input.click();
}

// HTML 转义
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// 绑定回复库事件
function bindReplyLibraryEvents() {
    if (!replyLibraryDOM.modal) initReplyLibraryDOM();

    // 关闭按钮
    if (replyLibraryDOM.closeBtn) {
        replyLibraryDOM.closeBtn.addEventListener('click', closeReplyLibraryModal);
    }
    if (replyLibraryDOM.closeBtn2) {
        replyLibraryDOM.closeBtn2.addEventListener('click', closeReplyLibraryModal);
    }

    // 标签页切换
    replyLibraryDOM.tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            switchReplyTab(tab.dataset.tab);
        });
    });

    // 搜索
    if (replyLibraryDOM.searchInput) {
        replyLibraryDOM.searchInput.addEventListener('input', (e) => {
            handleReplySearch(e.target.value);
        });
    }

    // 导入/导出
    if (replyLibraryDOM.importBtn) {
        replyLibraryDOM.importBtn.addEventListener('click', importReplyLibrary);
    }
    if (replyLibraryDOM.exportBtn) {
        replyLibraryDOM.exportBtn.addEventListener('click', exportReplyLibrary);
    }

    // 添加回复
    if (replyLibraryDOM.addBtn) {
        replyLibraryDOM.addBtn.addEventListener('click', addReply);
    }

    // 点击遮罩关闭
    if (replyLibraryDOM.modal) {
        replyLibraryDOM.modal.addEventListener('click', (e) => {
            if (e.target === replyLibraryDOM.modal) {
                closeReplyLibraryModal();
            }
        });
    }
}


// 初始化回复库管理功能
document.addEventListener('DOMContentLoaded', function () {
    // 绑定回复库事件
    bindReplyLibraryEvents();

    // 绑定管理按钮
    const manageRepliesBtn = document.getElementById('manageRepliesBtn');
    if (manageRepliesBtn) {
        manageRepliesBtn.addEventListener('click', openReplyLibraryModal);
    }
});


// 绑定聊天界面中的快捷回复按钮
const exportRepliesBtn = document.getElementById('exportRepliesBtn');
if (exportRepliesBtn) {
    exportRepliesBtn.addEventListener('click', exportReplyLibrary);
}

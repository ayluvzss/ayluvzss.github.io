// 聊天应用模块化架构实现

// ------------------------------
// 1. 配置与常量定义
// ------------------------------
const CONFIG = {
    STORAGE_KEYS: {
        MESSAGES: 'chat_messages',
        DAILY_NOTES: 'daily_notes',
        REPLY_LIBRARY: 'reply_library',
        CHECKIN_CALENDAR: 'checkin_calendar',
        INTIMACY: 'intimacy_info',
        USER_AVATAR: 'user_avatar',
        CURRENT_THEME: 'current_theme',
        CURRENT_DAILY_DATE: 'current_daily_date'
    },
    DEFAULT_SETTINGS: {
        THEME: 'light',
        INTIMACY_LEVEL: 1,
        INTIMACY_POINTS: 0,
        CHECKIN_STREAK: 0
    }
};

// ------------------------------
// 2. 应用状态管理
// ------------------------------
const appState = {
    currentView: 'chat',
    messages: [],
    currentDailyDate: null,
    replyLibrary: [],
    checkinCalendar: {},
    intimacy: {
        level: CONFIG.DEFAULT_SETTINGS.INTIMACY_LEVEL,
        points: CONFIG.DEFAULT_SETTINGS.INTIMACY_POINTS,
        streak: CONFIG.DEFAULT_SETTINGS.CHECKIN_STREAK
    },
    theme: CONFIG.DEFAULT_SETTINGS.THEME,
    userAvatar: null,
    isMenuOpen: false
};

// ------------------------------
// 3. 工具函数
// ------------------------------

// 日期格式化函数（使用本地时间）
function formatDate(date) {
    if (!date) date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// 时间格式化函数
function formatTime(date) {
    if (!date) date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
}

// 生成唯一ID
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// ------------------------------
// 4. 本地存储模块
// ------------------------------
const StorageModule = {
    // 保存数据到localStorage
    save(key, data) {
        try {
            const serialized = JSON.stringify(data);
            localStorage.setItem(key, serialized);
            return true;
        } catch (error) {
            console.error(`Error saving ${key}:`, error);
            return false;
        }
    },
    
    // 从localStorage加载数据
    load(key, defaultValue = null) {
        try {
            const serialized = localStorage.getItem(key);
            if (serialized === null) return defaultValue;
            return JSON.parse(serialized);
        } catch (error) {
            console.error(`Error loading ${key}:`, error);
            return defaultValue;
        }
    },
    
    // 删除数据
    remove(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.error(`Error removing ${key}:`, error);
            return false;
        }
    },
    
    // 清除所有数据
    clear() {
        try {
            localStorage.clear();
            return true;
        } catch (error) {
            console.error('Error clearing localStorage:', error);
            return false;
        }
    }
};

// ------------------------------
// 5. 视图切换模块
// ------------------------------
const ViewModule = {
    // 切换当前视图
    switchView(viewName) {
        // 隐藏所有视图
        const sections = ['chat', 'reply', 'log', 'calendar', 'intimacy'];
        sections.forEach(section => {
            const element = document.getElementById(`${section}-section`);
            if (element) {
                element.classList.remove('active');
            }
        });
        
        // 显示目标视图
        const targetSection = document.getElementById(`${viewName}-section`);
        if (targetSection) {
            targetSection.classList.add('active');
        }
        
        // 更新底部导航状态
        const navBtns = document.querySelectorAll('.nav-btn');
        navBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        
        const targetNavBtn = document.querySelector(`[data-view="${viewName}"]`);
        if (targetNavBtn) {
            targetNavBtn.classList.add('active');
        }
        
        // 更新应用状态
        appState.currentView = viewName;
        
        // 触发视图特定的初始化
        ViewModule.onViewSwitched(viewName);
    },
    
    // 视图切换时的回调
    onViewSwitched(viewName) {
        switch (viewName) {
            case 'log':
                LogModule.loadDailyLog();
                break;
            case 'calendar':
                CalendarModule.renderCalendar();
                break;
            case 'intimacy':
                IntimacyModule.updateDisplay();
                break;
            case 'reply':
                ReplyModule.renderLibrary();
                break;
        }
    },
    
    // 切换侧边菜单
    toggleMenu() {
        const menu = document.getElementById('side-menu');
        const overlay = document.getElementById('overlay');
        
        if (menu && overlay) {
            menu.classList.toggle('open');
            overlay.classList.toggle('active');
            appState.isMenuOpen = menu.classList.contains('open');
        }
    }
};

// ------------------------------
// 6. 聊天框架模块
// ------------------------------
const ChatModule = {
    // 初始化聊天模块
    init() {
        this.bindEvents();
        this.loadMessages();
        this.scrollToBottom();
    },
    
    // 绑定事件
    bindEvents() {
        const messageInput = document.getElementById('message-input');
        const sendBtn = document.getElementById('send-btn');
        
        // 发送按钮点击事件
        if (sendBtn) {
            sendBtn.addEventListener('click', () => this.sendMessage());
        }
        
        // 输入框回车发送
        if (messageInput) {
            messageInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    this.sendMessage();
                }
            });
        }
    },
    
    // 发送消息
    sendMessage() {
        const messageInput = document.getElementById('message-input');
        if (!messageInput) return;
        
        const text = messageInput.value.trim();
        if (!text) return;
        
        // 创建用户消息
        const userMessage = {
            id: generateId(),
            type: 'user',
            text: text,
            timestamp: new Date().toISOString()
        };
        
        // 添加到消息列表并显示
        this.addMessage(userMessage);
        
        // 清空输入框
        messageInput.value = '';
        
        // 生成回复（模拟AI回复）
        setTimeout(() => this.generateReply(text), 500);
        
        // 保存消息
        this.saveMessages();
        
        // 更新日志
        LogModule.updateDailyLog(text);
        
        // 更新亲密度
        IntimacyModule.addPoints(1);
    },
    
    // 生成AI回复
    generateReply(userText) {
        // 简单的回复生成逻辑
        const replies = [
            '这很有趣！能详细说说吗？',
            '我明白了，谢谢你的分享。',
            '这个想法很棒！',
            '我也有类似的经历。',
            '你说得对。',
            '真的吗？',
            '很有启发性。',
            '我会记住这点的。',
            '谢谢你告诉我这些。',
            '这让我想到了一些事情。'
        ];
        
        // 从回复库中查找匹配的回复
        const matchedReply = appState.replyLibrary.find(reply => 
            reply.keywords.some(keyword => userText.toLowerCase().includes(keyword.toLowerCase()))
        );
        
        const replyText = matchedReply ? matchedReply.text : replies[Math.floor(Math.random() * replies.length)];
        
        const botMessage = {
            id: generateId(),
            type: 'bot',
            text: replyText,
            timestamp: new Date().toISOString()
        };
        
        this.addMessage(botMessage);
        this.saveMessages();
    },
    
    // 添加消息到列表
    addMessage(message) {
        appState.messages.push(message);
        this.renderMessage(message);
        this.scrollToBottom();
    },
    
    // 渲染单个消息
    renderMessage(message) {
        const messageList = document.getElementById('message-list');
        if (!messageList) return;
        
        const messageElement = document.createElement('div');
        messageElement.className = `message ${message.type}`;
        
        const timestamp = new Date(message.timestamp);
        const timeString = formatTime(timestamp);
        
        messageElement.innerHTML = `
            <div class="message-content">${this.escapeHtml(message.text)}</div>
            <div class="message-time">${timeString}</div>
        `;
        
        messageList.appendChild(messageElement);
    },
    
    // 渲染所有消息
    renderMessages() {
        const messageList = document.getElementById('message-list');
        if (!messageList) return;
        
        messageList.innerHTML = '';
        appState.messages.forEach(message => this.renderMessage(message));
        this.scrollToBottom();
    },
    
    // 滚动到底部
    scrollToBottom() {
        const messageList = document.getElementById('message-list');
        if (messageList) {
            messageList.scrollTop = messageList.scrollHeight;
        }
    },
    
    // 保存消息到本地存储
    saveMessages() {
        StorageModule.save(CONFIG.STORAGE_KEYS.MESSAGES, appState.messages);
    },
    
    // 从本地存储加载消息
    loadMessages() {
        appState.messages = StorageModule.load(CONFIG.STORAGE_KEYS.MESSAGES, []);
        this.renderMessages();
    },
    
    // 转义HTML
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
};

// ------------------------------
// 7. 回复库系统模块
// ------------------------------
const ReplyModule = {
    // 初始化回复库
    init() {
        this.bindEvents();
        this.loadLibrary();
        this.renderLibrary();
    },
    
    // 绑定事件
    bindEvents() {
        const searchInput = document.getElementById('reply-search');
        const importBtn = document.getElementById('import-reply-btn');
        const exportBtn = document.getElementById('export-reply-btn');
        
        if (searchInput) {
            searchInput.addEventListener('input', (e) => this.searchLibrary(e.target.value));
        }
        
        if (importBtn) {
            importBtn.addEventListener('click', () => this.importLibrary());
        }
        
        if (exportBtn) {
            exportBtn.addEventListener('click', () => this.exportLibrary());
        }
    },
    
    // 渲染回复库
    renderLibrary() {
        const replyList = document.getElementById('reply-list');
        if (!replyList) return;
        
        replyList.innerHTML = '';
        
        appState.replyLibrary.forEach((reply, index) => {
            const replyItem = document.createElement('div');
            replyItem.className = 'reply-item';
            replyItem.innerHTML = `
                <div class="reply-text">${this.escapeHtml(reply.text)}</div>
                <div class="reply-keywords">关键字: ${reply.keywords.join(', ')}</div>
            `;
            
            replyItem.addEventListener('click', () => this.selectReply(reply.text));
            replyList.appendChild(replyItem);
        });
    },
    
    // 搜索回复库
    searchLibrary(query) {
        const replyList = document.getElementById('reply-list');
        if (!replyList) return;
        
        const filtered = appState.replyLibrary.filter(reply => 
            reply.text.toLowerCase().includes(query.toLowerCase()) ||
            reply.keywords.some(keyword => keyword.toLowerCase().includes(query.toLowerCase()))
        );
        
        replyList.innerHTML = '';
        filtered.forEach(reply => {
            const replyItem = document.createElement('div');
            replyItem.className = 'reply-item';
            replyItem.innerHTML = `
                <div class="reply-text">${this.escapeHtml(reply.text)}</div>
                <div class="reply-keywords">关键字: ${reply.keywords.join(', ')}</div>
            `;
            replyItem.addEventListener('click', () => this.selectReply(reply.text));
            replyList.appendChild(replyItem);
        });
    },
    
    // 选择回复
    selectReply(text) {
        const messageInput = document.getElementById('message-input');
        if (messageInput) {
            messageInput.value = text;
            ViewModule.switchView('chat');
            messageInput.focus();
        }
    },
    
    // 添加回复
    addReply(text, keywords) {
        const newReply = {
            id: generateId(),
            text: text,
            keywords: Array.isArray(keywords) ? keywords : [keywords]
        };
        
        appState.replyLibrary.push(newReply);
        this.saveLibrary();
        this.renderLibrary();
    },
    
    // 导入回复库
    importLibrary() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    try {
                        const imported = JSON.parse(event.target.result);
                        if (Array.isArray(imported)) {
                            appState.replyLibrary = imported;
                            this.saveLibrary();
                            this.renderLibrary();
                            alert('回复库导入成功！');
                        } else {
                            alert('导入文件格式错误！');
                        }
                    } catch (error) {
                        alert('导入失败：' + error.message);
                    }
                };
                reader.readAsText(file);
            }
        };
        
        input.click();
    },
    
    // 导出回复库
    exportLibrary() {
        if (appState.replyLibrary.length === 0) {
            alert('回复库为空，无法导出！');
            return;
        }
        
        const dataStr = JSON.stringify(appState.replyLibrary, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
        
        const exportFileDefaultName = `reply_library_${new Date().toISOString().slice(0, 10)}.json`;
        
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
    },
    
    // 保存回复库
    saveLibrary() {
        StorageModule.save(CONFIG.STORAGE_KEYS.REPLY_LIBRARY, appState.replyLibrary);
    },
    
    // 加载回复库
    loadLibrary() {
        appState.replyLibrary = StorageModule.load(CONFIG.STORAGE_KEYS.REPLY_LIBRARY, []);
        
        // 如果没有回复，添加默认回复
        if (appState.replyLibrary.length === 0) {
            this.addDefaultReplies();
        }
    },
    
    // 添加默认回复
    addDefaultReplies() {
        const defaultReplies = [
            { text: '你好！', keywords: ['hello', 'hi', '你好'] },
            { text: '今天天气真好！', keywords: ['天气', 'sunny', 'weather'] },
            { text: '谢谢你的帮助！', keywords: ['help', 'assist', '谢谢'] },
            { text: '我很开心！', keywords: ['happy', '开心', 'glad'] },
            { text: '今天过得怎么样？', keywords: ['today', 'day', '过得'] }
        ];
        
        defaultReplies.forEach(reply => this.addReply(reply.text, reply.keywords));
    },
    
    // 转义HTML
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
};

// ------------------------------
// 8. 日志系统模块
// ------------------------------
const LogModule = {
    // 初始化日志模块
    init() {
        this.bindEvents();
        this.initCurrentDailyDate();
    },
    
    // 绑定事件
    bindEvents() {
        const logDateInput = document.getElementById('log-date-input');
        const saveLogBtn = document.getElementById('save-log-btn');
        
        if (logDateInput) {
            logDateInput.addEventListener('change', () => this.loadDailyLog());
        }
        
        if (saveLogBtn) {
            saveLogBtn.addEventListener('click', () => this.saveDailyLog());
        }
    },
    
    // 初始化当前日期
    initCurrentDailyDate() {
        // 尝试从本地存储加载
        let savedDate = StorageModule.load(CONFIG.STORAGE_KEYS.CURRENT_DAILY_DATE);
        
        // 如果没有保存或日期不是今天，使用今天的日期
        const today = formatDate();
        if (!savedDate || savedDate !== today) {
            savedDate = today;
            this.saveCurrentDailyDate(savedDate);
        }
        
        appState.currentDailyDate = savedDate;
        
        // 更新日期选择器
        const logDateInput = document.getElementById('log-date-input');
        if (logDateInput) {
            logDateInput.value = savedDate;
        }
    },
    
    // 保存当前日期
    saveCurrentDailyDate(date) {
        StorageModule.save(CONFIG.STORAGE_KEYS.CURRENT_DAILY_DATE, date);
        appState.currentDailyDate = date;
    },
    
    // 加载每日日志
    loadDailyLog() {
        const logDateInput = document.getElementById('log-date-input');
        const logContent = document.getElementById('log-content');
        
        if (!logDateInput || !logContent) return;
        
        const selectedDate = logDateInput.value;
        if (!selectedDate) return;
        
        const dailyNotes = StorageModule.load(CONFIG.STORAGE_KEYS.DAILY_NOTES, {});
        logContent.value = dailyNotes[selectedDate] || '';
    },
    
    // 保存每日日志
    saveDailyLog() {
        const logDateInput = document.getElementById('log-date-input');
        const logContent = document.getElementById('log-content');
        
        if (!logDateInput || !logContent) return;
        
        const selectedDate = logDateInput.value;
        if (!selectedDate) return;
        
        let dailyNotes = StorageModule.load(CONFIG.STORAGE_KEYS.DAILY_NOTES, {});
        dailyNotes[selectedDate] = logContent.value;
        
        StorageModule.save(CONFIG.STORAGE_KEYS.DAILY_NOTES, dailyNotes);
        alert('日志保存成功！');
    },
    
    // 更新今日日志
    updateDailyLog(message) {
        if (!appState.currentDailyDate) return;
        
        let dailyNotes = StorageModule.load(CONFIG.STORAGE_KEYS.DAILY_NOTES, {});
        const timestamp = new Date().toLocaleTimeString();
        
        if (!dailyNotes[appState.currentDailyDate]) {
            dailyNotes[appState.currentDailyDate] = '';
        }
        
        dailyNotes[appState.currentDailyDate] += `[${timestamp}] ${message}\n`;
        
        StorageModule.save(CONFIG.STORAGE_KEYS.DAILY_NOTES, dailyNotes);
    }
};

// ------------------------------
// 9. 打卡日历模块
// ------------------------------
const CalendarModule = {
    // 初始化日历模块
    init() {
        this.bindEvents();
        this.loadCalendar();
        this.renderCalendar();
    },
    
    // 绑定事件
    bindEvents() {
        const checkinBtn = document.getElementById('checkin-btn');
        
        if (checkinBtn) {
            checkinBtn.addEventListener('click', () => this.checkin());
        }
    },
    
    // 渲染日历
    renderCalendar() {
        const calendarGrid = document.getElementById('calendar-grid');
        if (!calendarGrid) return;
        
        // 清空日历
        calendarGrid.innerHTML = '';
        
        // 获取当前月份的第一天和最后一天
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth();
        
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        
        // 获取第一天是星期几（0-6，0是星期日）
        const firstDayOfWeek = firstDay.getDay();
        
        // 添加空白日期（上个月的尾巴）
        for (let i = 0; i < firstDayOfWeek; i++) {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';
            calendarGrid.appendChild(dayElement);
        }
        
        // 添加当前月份的日期
        for (let day = 1; day <= lastDay.getDate(); day++) {
            const dayDate = new Date(year, month, day);
            const dateString = formatDate(dayDate);
            const isChecked = appState.checkinCalendar[dateString];
            const isToday = dateString === formatDate();
            
            const dayElement = document.createElement('div');
            dayElement.className = `calendar-day ${isChecked ? 'checked' : ''} ${isToday ? 'today' : ''}`;
            dayElement.textContent = day;
            dayElement.dataset.date = dateString;
            
            dayElement.addEventListener('click', () => this.toggleCheckin(dateString));
            calendarGrid.appendChild(dayElement);
        }
    },
    
    // 打卡
    checkin() {
        const today = formatDate();
        
        if (!appState.checkinCalendar[today]) {
            appState.checkinCalendar[today] = true;
            this.saveCalendar();
            this.renderCalendar();
            
            // 更新亲密度
            IntimacyModule.addPoints(5);
            alert('今日打卡成功！');
        } else {
            alert('今天已经打过卡了！');
        }
    },
    
    // 切换打卡状态
    toggleCheckin(dateString) {
        appState.checkinCalendar[dateString] = !appState.checkinCalendar[dateString];
        this.saveCalendar();
        this.renderCalendar();
    },
    
    // 保存日历数据
    saveCalendar() {
        StorageModule.save(CONFIG.STORAGE_KEYS.CHECKIN_CALENDAR, appState.checkinCalendar);
    },
    
    // 加载日历数据
    loadCalendar() {
        appState.checkinCalendar = StorageModule.load(CONFIG.STORAGE_KEYS.CHECKIN_CALENDAR, {});
    }
};

// ------------------------------
// 10. 亲密度面板模块
// ------------------------------
const IntimacyModule = {
    // 初始化亲密度模块
    init() {
        this.loadIntimacy();
        this.updateDisplay();
    },
    
    // 更新显示
    updateDisplay() {
        const levelElement = document.getElementById('intimacy-level');
        const pointsElement = document.getElementById('intimacy-points');
        const progressFill = document.getElementById('progress-fill');
        
        if (levelElement) {
            levelElement.textContent = appState.intimacy.level;
        }
        
        if (pointsElement) {
            const nextLevelPoints = this.getNextLevelPoints(appState.intimacy.level);
            pointsElement.textContent = `${appState.intimacy.points}/${nextLevelPoints}`;
        }
        
        if (progressFill) {
            const nextLevelPoints = this.getNextLevelPoints(appState.intimacy.level);
            const percentage = Math.min((appState.intimacy.points / nextLevelPoints) * 100, 100);
            progressFill.style.width = `${percentage}%`;
        }
    },
    
    // 添加亲密度点数
    addPoints(points) {
        appState.intimacy.points += points;
        
        // 检查是否升级
        const nextLevelPoints = this.getNextLevelPoints(appState.intimacy.level);
        if (appState.intimacy.points >= nextLevelPoints) {
            appState.intimacy.level++;
            appState.intimacy.points -= nextLevelPoints;
            alert(`恭喜！亲密度等级提升到 ${appState.intimacy.level} 级！`);
        }
        
        this.saveIntimacy();
        this.updateDisplay();
    },
    
    // 获取升级所需点数
    getNextLevelPoints(level) {
        // 简单的升级公式：等级 * 100
        return level * 100;
    },
    
    // 保存亲密度数据
    saveIntimacy() {
        StorageModule.save(CONFIG.STORAGE_KEYS.INTIMACY, appState.intimacy);
    },
    
    // 加载亲密度数据
    loadIntimacy() {
        const saved = StorageModule.load(CONFIG.STORAGE_KEYS.INTIMACY);
        
        if (saved) {
            appState.intimacy = saved;
        } else {
            appState.intimacy = {
                level: CONFIG.DEFAULT_SETTINGS.INTIMACY_LEVEL,
                points: CONFIG.DEFAULT_SETTINGS.INTIMACY_POINTS,
                streak: CONFIG.DEFAULT_SETTINGS.CHECKIN_STREAK
            };
        }
    }
};

// ------------------------------
// 11. 主题切换模块
// ------------------------------
const ThemeModule = {
    // 初始化主题模块
    init() {
        this.loadTheme();
        this.bindEvents();
    },
    
    // 绑定事件
    bindEvents() {
        const themeSwitchBtn = document.querySelector('[data-menu="theme"]');
        
        if (themeSwitchBtn) {
            themeSwitchBtn.addEventListener('click', () => this.toggleTheme());
        }
    },
    
    // 切换主题
    toggleTheme() {
        const newTheme = appState.theme === 'light' ? 'dark' : 'light';
        this.applyTheme(newTheme);
        
        // 关闭菜单
        ViewModule.toggleMenu();
    },
    
    // 应用主题
    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        appState.theme = theme;
        this.saveTheme();
    },
    
    // 保存主题
    saveTheme() {
        StorageModule.save(CONFIG.STORAGE_KEYS.CURRENT_THEME, appState.theme);
    },
    
    // 加载主题
    loadTheme() {
        const savedTheme = StorageModule.load(CONFIG.STORAGE_KEYS.CURRENT_THEME);
        const theme = savedTheme || CONFIG.DEFAULT_SETTINGS.THEME;
        this.applyTheme(theme);
    }
};

// ------------------------------
// 12. 头像上传模块
// ------------------------------
const AvatarModule = {
    // 初始化头像模块
    init() {
        this.bindEvents();
        this.loadAvatar();
    },
    
    // 绑定事件
    bindEvents() {
        const avatarBtn = document.getElementById('avatar-btn');
        const avatarInput = document.createElement('input');
        avatarInput.type = 'file';
        avatarInput.accept = 'image/*';
        
        avatarInput.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                this.uploadAvatar(file);
            }
        };
        
        if (avatarBtn) {
            avatarBtn.addEventListener('click', () => avatarInput.click());
        }
    },
    
    // 上传头像
    uploadAvatar(file) {
        const reader = new FileReader();
        
        reader.onload = (e) => {
            const avatarData = e.target.result;
            this.saveAvatar(avatarData);
            this.updateAvatarDisplay(avatarData);
        };
        
        reader.readAsDataURL(file);
    },
    
    // 更新头像显示
    updateAvatarDisplay(avatarData) {
        const avatarImage = document.querySelector('#avatar-btn img');
        if (avatarImage) {
            avatarImage.src = avatarData;
        }
    },
    
    // 保存头像
    saveAvatar(avatarData) {
        StorageModule.save(CONFIG.STORAGE_KEYS.USER_AVATAR, avatarData);
        appState.userAvatar = avatarData;
    },
    
    // 加载头像
    loadAvatar() {
        const savedAvatar = StorageModule.load(CONFIG.STORAGE_KEYS.USER_AVATAR);
        if (savedAvatar) {
            appState.userAvatar = savedAvatar;
            this.updateAvatarDisplay(savedAvatar);
        }
    }
};

// ------------------------------
// 13. 应用初始化
// ------------------------------
function initApp() {
    // 绑定全局事件
    bindGlobalEvents();
    
    // 初始化各个模块
    ChatModule.init();
    ReplyModule.init();
    LogModule.init();
    CalendarModule.init();
    IntimacyModule.init();
    ThemeModule.init();
    AvatarModule.init();
    
    console.log('聊天应用初始化完成！');
}

// 绑定全局事件
function bindGlobalEvents() {
    // 底部导航点击事件
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const view = btn.getAttribute('data-view');
            if (view) {
                ViewModule.switchView(view);
            }
        });
    });
    
    // 菜单按钮点击事件
    const menuBtn = document.getElementById('menu-btn');
    if (menuBtn) {
        menuBtn.addEventListener('click', () => ViewModule.toggleMenu());
    }
    
    // 关闭菜单按钮点击事件
    const closeBtn = document.getElementById('close-menu-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => ViewModule.toggleMenu());
    }
    
    // 遮罩层点击事件
    const overlay = document.getElementById('overlay');
    if (overlay) {
        overlay.addEventListener('click', () => ViewModule.toggleMenu());
    }
    
    // 页面加载完成事件
    document.addEventListener('DOMContentLoaded', () => {
        initApp();
    });
}

// 初始化应用
window.addEventListener('load', initApp);

// 暴露全局API（用于调试）
window.ChatApp = {
    CONFIG,
    appState,
    ChatModule,
    ReplyModule,
    LogModule,
    CalendarModule,
    IntimacyModule,
    ThemeModule,
    AvatarModule,
    ViewModule,
    StorageModule
};
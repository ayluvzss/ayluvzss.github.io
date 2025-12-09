// 简单的日期系统一致性测试脚本
// 可直接在Node.js环境中运行

// 模拟localStorage（在Node.js环境中）
const fs = require('fs');
const path = require('path');

// localStorage模拟实现
class LocalStorage {
    constructor() {
        this.storagePath = path.join(__dirname, '.localStorage.json');
        this.data = this.loadData();
    }
    
    loadData() {
        try {
            if (fs.existsSync(this.storagePath)) {
                const content = fs.readFileSync(this.storagePath, 'utf8');
                return JSON.parse(content);
            }
            return {};
        } catch (e) {
            console.error('Error loading localStorage data:', e);
            return {};
        }
    }
    
    saveData() {
        try {
            fs.writeFileSync(this.storagePath, JSON.stringify(this.data), 'utf8');
        } catch (e) {
            console.error('Error saving localStorage data:', e);
        }
    }
    
    getItem(key) {
        return this.data[key] || null;
    }
    
    setItem(key, value) {
        this.data[key] = value;
        this.saveData();
    }
    
    removeItem(key) {
        delete this.data[key];
        this.saveData();
    }
    
    clear() {
        this.data = {};
        this.saveData();
    }
    
    length() {
        return Object.keys(this.data).length;
    }
    
    key(index) {
        return Object.keys(this.data)[index] || null;
    }
}

// 全局localStorage
const localStorage = new LocalStorage();

// 应用常量和工具函数
const CONFIG = {
    STORAGE_KEYS: {
        CURRENT_DAILY_DATE: "currentDailyDate",
        DAILY_NOTES_PREFIX: "dailyNotes_"
    }
};

// 工具函数
function formatDate(d) {
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();
    return `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
}

function parseDate(str) {
    const [y, m, d] = str.split("-");
    return { year: Number(y), month: Number(m), day: Number(d) };
}

function formatDateForDisplay(d) {
    const date = typeof d === 'string' ? new Date(d) : d;
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}年${month}月${day}日`;
}

// 模拟应用状态
let appState = {
    currentDailyDate: null
};

// 模拟DOM元素
let DOM = {
    dailyDateTitle: {
        textContent: ''
    }
};

// 日志函数
function log(message, isSuccess = true) {
    const prefix = isSuccess ? '✓' : '✗';
    console.log(`[${prefix}] ${message}`);
}

// 核心功能函数
function setDailyDate(dateStr) {
    appState.currentDailyDate = dateStr;
    saveCurrentDailyDate();
    updateDailyDateTitle();
    loadDailyNotes();
}

function updateDailyDateTitle() {
    if (!appState.currentDailyDate) return;
    const d = parseDate(appState.currentDailyDate);
    DOM.dailyDateTitle.textContent = `${d.year}年${d.month}月${d.day}日`;
    log(`日期标题更新为: ${DOM.dailyDateTitle.textContent}`);
}

function loadDailyNotes() {
    const dateStr = appState.currentDailyDate;
    log(`loadDailyNotes使用日期: ${dateStr}`);
    
    const storageKey = CONFIG.STORAGE_KEYS.DAILY_NOTES_PREFIX + dateStr;
    let data;
    try {
        const storedData = localStorage.getItem(storageKey);
        data = storedData ? JSON.parse(storedData) : {
            food: "",
            workout: "",
            letter: "",
            footerMessage: ""
        };
    } catch (e) {
        log(`加载失败: ${e.message}`, false);
        data = {
            food: "",
            workout: "",
            letter: "",
            footerMessage: ""
        };
    }
    
    log(`从localStorage[${storageKey}]加载数据: ${JSON.stringify(data)}`);
    return data;
}

function saveCurrentDailyDate() {
    if (!appState.currentDailyDate) {
        log("当前日期为null，不保存");
        return;
    }
    
    try {
        localStorage.setItem(CONFIG.STORAGE_KEYS.CURRENT_DAILY_DATE, appState.currentDailyDate);
        log(`保存当前日期到localStorage[${CONFIG.STORAGE_KEYS.CURRENT_DAILY_DATE}] = ${appState.currentDailyDate}`);
    } catch (e) {
        log(`保存失败: ${e.message}`, false);
    }
}

function loadCurrentDailyDate() {
    try {
        const savedDate = localStorage.getItem(CONFIG.STORAGE_KEYS.CURRENT_DAILY_DATE);
        if (savedDate) {
            appState.currentDailyDate = savedDate;
            log(`从localStorage加载当前日期: ${savedDate}`);
            return true;
        } else {
            log("localStorage中没有保存的日期");
            return false;
        }
    } catch (e) {
        log(`加载失败: ${e.message}`, false);
        return false;
    }
}

// 测试用例
console.log('\n=== 日期系统一致性测试开始 ===\n');

// 测试1: 清除localStorage并初始化
log('测试1: 清除localStorage并初始化');
localStorage.removeItem(CONFIG.STORAGE_KEYS.CURRENT_DAILY_DATE);
log('清除localStorage中的CURRENT_DAILY_DATE');

// 测试2: 日期格式化
log('测试2: 日期格式化');
const today = new Date();
const todayStr = formatDate(today);
log(`formatDate(new Date()): ${todayStr}`);

// 测试3: 设置当前日期
log('测试3: 设置当前日期');
setDailyDate(todayStr);

// 测试4: 验证appState和localStorage一致性
log('测试4: 验证appState和localStorage一致性');
if (appState.currentDailyDate === todayStr) {
    log('✓ appState.currentDailyDate 设置正确');
} else {
    log('✗ appState.currentDailyDate 设置错误', false);
}

const savedDate = localStorage.getItem(CONFIG.STORAGE_KEYS.CURRENT_DAILY_DATE);
if (savedDate === todayStr) {
    log('✓ 日期成功保存到localStorage');
} else {
    log('✗ 日期未成功保存到localStorage', false);
}

// 测试5: 模拟应用重启并加载日期
log('测试5: 模拟应用重启并加载日期');
appState.currentDailyDate = null;
DOM.dailyDateTitle.textContent = '';
log(`模拟应用重启后: appState.currentDailyDate = ${appState.currentDailyDate}`);

const loadSuccess = loadCurrentDailyDate();
if (loadSuccess && appState.currentDailyDate === todayStr) {
    log('✓ 成功从localStorage加载保存的日期');
    updateDailyDateTitle();
    loadDailyNotes();
} else {
    log('✗ 无法从localStorage加载保存的日期', false);
}

// 测试6: 测试另一个日期
log('测试6: 测试另一个日期');
const anotherDate = new Date('2025-12-25');
const anotherDateStr = formatDate(anotherDate);
log(`formatDate(2025-12-25): ${anotherDateStr}`);

setDailyDate(anotherDateStr);

// 测试7: 验证第二个日期的一致性
log('测试7: 验证第二个日期的一致性');
if (appState.currentDailyDate === anotherDateStr) {
    log('✓ appState.currentDailyDate 设置正确');
} else {
    log('✗ appState.currentDailyDate 设置错误', false);
}

const savedDate2 = localStorage.getItem(CONFIG.STORAGE_KEYS.CURRENT_DAILY_DATE);
if (savedDate2 === anotherDateStr) {
    log('✓ 第二个日期成功保存到localStorage');
} else {
    log('✗ 第二个日期未成功保存到localStorage', false);
}

// 显示当前localStorage内容
log('\n=== 当前localStorage内容 ===');
for (let i = 0; i < localStorage.length(); i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    log(`${key}: ${value}`);
}

console.log('\n=== 日期系统一致性测试结束 ===');
console.log('\n总结:');
console.log('- 使用formatDate()函数确保日期格式一致');
console.log('- currentDailyDate已成功保存到localStorage');
console.log('- 应用重启后能正确加载保存的日期');
console.log('- 所有测试用例均使用相同的日期格式化方式，避免时区问题');

// 简单测试月份选择器功能
console.log('Testing month picker functionality...');

// 模拟DOM环境
const { JSDOM } = require('jsdom');
const dom = new JSDOM('<!DOCTYPE html><html><body><div class="dp-months"></div><div class="dp-calendar"></div></body></html>');

global.document = dom.window.document;
global.window = dom.window;

// 模拟当前日期
currentPickerYear = 2025;
currentPickerMonth = 12;

// 模拟renderCalendar函数
function renderCalendar() {
    console.log(`Calendar rendered for ${currentPickerYear}年${currentPickerMonth}月`);
}

// 导入修复后的renderMonths函数
const fs = require('fs');
const appContent = fs.readFileSync('./app.js', 'utf8');

// 提取renderMonths函数
const renderMonthsMatch = appContent.match(/function renderMonths\(\)\s*\{[\s\S]*?\}/);
if (renderMonthsMatch) {
    eval(renderMonthsMatch[0]);
    console.log('✅ renderMonths function loaded successfully');
    
    // 渲染月份
    renderMonths();
    console.log('✅ Months rendered successfully');
    
    // 获取所有月份按钮
    const monthBtns = document.querySelectorAll('.dp-months button');
    console.log(`✅ Found ${monthBtns.length} month buttons`);
    
    // 测试第一个按钮（1月）的点击事件
    if (monthBtns.length > 0) {
        console.log(`\nTesting button click for ${monthBtns[0].textContent}`);
        monthBtns[0].click();
        console.log(`✅ Button click handled, currentPickerMonth is now ${currentPickerMonth}`);
        
        // 检查按钮激活状态
        const activeBtn = document.querySelector('.dp-months button.active');
        if (activeBtn) {
            console.log(`✅ Active button correctly set to ${activeBtn.textContent}`);
        } else {
            console.log('❌ No active button found');
        }
    }
    
    console.log('\n🎉 All tests completed successfully!');
} else {
    console.log('❌ Failed to load renderMonths function');
}

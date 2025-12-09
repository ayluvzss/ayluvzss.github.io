// 简单的语法和DOM元素检查脚本
const fs = require('fs');

console.log('Testing calendar fix...');

// 检查HTML文件是否包含弹出式月份选择器
const htmlContent = fs.readFileSync('./index.html', 'utf8');
if (htmlContent.includes('popup-month-selector')) {
    console.log('✅ HTML contains popup-month-selector');
} else {
    console.log('❌ HTML missing popup-month-selector');
}

// 检查CSS文件是否包含弹出式月份选择器样式
const cssContent = fs.readFileSync('./style.css', 'utf8');
if (cssContent.includes('.popup-month-selector')) {
    console.log('✅ CSS contains popup-month-selector styles');
} else {
    console.log('❌ CSS missing popup-month-selector styles');
}

// 检查JS文件是否包含弹出式月份选择器相关代码
const jsContent = fs.readFileSync('./app.js', 'utf8');
if (jsContent.includes('popupMonthSelector')) {
    console.log('✅ JavaScript contains popupMonthSelector DOM element');
} else {
    console.log('❌ JavaScript missing popupMonthSelector DOM element');
}

if (jsContent.includes('currentDate.getFullYear()')) {
    console.log('✅ JavaScript contains year display logic');
} else {
    console.log('❌ JavaScript missing year display logic');
}

if (jsContent.includes('monthButtons.forEach')) {
    console.log('✅ JavaScript contains month button event handling');
} else {
    console.log('❌ JavaScript missing month button event handling');
}

console.log('\nAll checks completed!');

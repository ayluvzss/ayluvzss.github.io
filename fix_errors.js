const fs = require('fs');

// Read the file
let content = fs.readFileSync('./app.js', 'utf8');
let lines = content.split('\n');

console.log('Starting fixes...\n');

// Fix Line 2507 - incomplete button tag
lines[2506] = '                    <button class="reply-action-btn edit" onclick="editReply(${index})" title="编辑">✏️</button>';

// Fix Line 2508 - incomplete button tag  
lines[2507] = '                    <button class="reply-action-btn delete" onclick="deleteReply(${index})" title="删除">🗑️</button>';

// Fix Line 2416 - corrupted comment
lines[2415] = '// 回复库管理功能';

// Fix Line 2419 - corrupted comment
lines[2418] = '// 回复库状态';

// Fix Line 2470 - corrupted comment
lines[2469] = '// 切换标签函数';

// Fix Line 2474 - corrupted comment
lines[2473] = '    // 更新标签按钮状态';

// Fix Line 2497 - corrupted string
lines[2496] = '            ${replyLibraryState.searchKeyword ? \'没有找到匹配的回复\' : \'暂无回复,点击下方按钮添加\'}';

// Fix Line 2548 - corrupted alert
lines[2547] = '        alert(\'系统预设回复不可添加,请切换到"我的回复"标签页\');';

// Fix Line 2560 - corrupted prompt
lines[2559] = '    const newText = prompt(\'编辑回复内容:\', oldText);';

// Fix Line 2591 - corrupted comment
lines[2590] = '        // 找到原始索引并删除';

// Fix Line 2609 - corrupted comment
lines[2608] = '// 导出回复库';

// Fix Line 2630 - corrupted comment
lines[2629] = '// 导入回复库';

// Fix Line 2656 - corrupted comment
lines[2655] = '                    // 合并而不是替换';

// Fix Line 2676 - corrupted alert
lines[2675] = '                alert(\'导入失败,请检查文件格式\');';

// Fix Line 2692 - corrupted comment
lines[2691] = '// 绑定回复库事件';

// Fix Line 2704 - corrupted comment
lines[2703] = '    // 标签页切换';

// Fix Line 2742 - corrupted comment
lines[2741] = '// 初始化回复库管理功能';

// Fix Line 2744 - corrupted comment
lines[2743] = '    // 绑定回复库事件';

// Fix Line 2747 - corrupted comment
lines[2746] = '    // 绑定管理按钮';

// Fix Line 2755 - corrupted comment
lines[2754] = '    // 绑定聊天界面中的快捷回复按钮';

// Write back
const fixed = lines.join('\n');
fs.writeFileSync('./app.js', fixed, 'utf8');

console.log('✅ Fixed all syntax errors and corrupted characters!');
console.log('Fixed issues:');
console.log('- Line 2507-2508: Incomplete button tags');
console.log('- Lines 2416-2755: Corrupted comments and strings');

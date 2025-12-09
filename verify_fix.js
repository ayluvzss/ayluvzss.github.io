const fs = require('fs');

const content = fs.readFileSync('./app.js', 'utf8');
const lines = content.split('\n');

console.log('Checking specific lines after fix:\n');

// Check lines 2506-2509
for (let i = 2505; i <= 2509; i++) {
    console.log(`Line ${i + 1}: ${lines[i]}`);
}

console.log('\n---\n');

// Check if the buttons are properly fixed
const line2507 = lines[2506];
const line2508 = lines[2507];

if (line2507.includes('✏️</button>') && line2507.includes('编辑')) {
    console.log('✅ Line 2507 is FIXED!');
} else {
    console.log('❌ Line 2507 still has issues');
}

if (line2508.includes('🗑️</button>') && line2508.includes('删除')) {
    console.log('✅ Line 2508 is FIXED!');
} else {
    console.log('❌ Line 2508 still has issues');
}

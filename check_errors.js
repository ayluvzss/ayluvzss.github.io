const fs = require('fs');

const content = fs.readFileSync('./app.js', 'utf8');
const lines = content.split('\n');

console.log('Finding all problematic lines...\n');

const problems = [];

lines.forEach((line, i) => {
    const lineNum = i + 1;
    const trimmed = line.trim();

    // Check for corrupted characters (replacement character)
    if (line.includes('\uFFFD') || line.match(/[^\x00-\x7F\u4e00-\u9fa5\u3000-\u303F\uFF00-\uFFEF]/)) {
        problems.push({ line: lineNum, type: 'corrupted', content: trimmed.substring(0, 80) });
    }

    // Check for incomplete HTML closing tags
    if (line.match(/<\/[^>]*$/)) {
        problems.push({ line: lineNum, type: 'incomplete_tag', content: trimmed });
    }

    // Check for missing closing tags in button elements
    if (line.includes('</button') && !line.includes('</button>')) {
        problems.push({ line: lineNum, type: 'missing_close', content: trimmed });
    }
});

console.log(`Found ${problems.length} potential issues:\n`);
problems.forEach(p => {
    console.log(`Line ${p.line} [${p.type}]: ${p.content}`);
});

// Save to file for easier review
fs.writeFileSync('./error_report.txt', problems.map(p =>
    `Line ${p.line} [${p.type}]: ${p.content}`
).join('\n'));

console.log('\nReport saved to error_report.txt');

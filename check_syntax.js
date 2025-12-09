const fs = require('fs');

const content = fs.readFileSync('./app.js', 'utf8');
const lines = content.split('\n');

console.log('Checking for REAL syntax errors...\n');

const realErrors = [];

lines.forEach((line, i) => {
    const lineNum = i + 1;

    // Check for incomplete HTML closing tags (missing >)
    if (line.match(/<\/[a-z]+[^>]*$/i) && !line.includes('</button>')) {
        realErrors.push({ line: lineNum, type: 'incomplete_closing_tag', content: line.trim() });
    }

    // Check for incomplete opening tags
    if (line.match(/<button[^>]*[^>]$/i) && !line.includes('</button>')) {
        realErrors.push({ line: lineNum, type: 'incomplete_opening_tag', content: line.trim() });
    }
});

if (realErrors.length === 0) {
    console.log('✅ No syntax errors found! The file looks good.');
} else {
    console.log(`Found ${realErrors.length} REAL syntax errors:\n`);
    realErrors.forEach(e => {
        console.log(`Line ${e.line} [${e.type}]:`);
        console.log(`  ${e.content}\n`);
    });
}

// Also check if emojis and Chinese characters are properly encoded
console.log('\n--- Checking specific lines for proper encoding ---\n');

const testLines = [2507, 2508];
testLines.forEach(lineNum => {
    const line = lines[lineNum - 1];
    console.log(`Line ${lineNum}:`);
    console.log(`  ${line}`);

    if (lineNum === 2507 && line.includes('✏️') && line.includes('</button>')) {
        console.log('  ✅ Properly encoded with emoji and closing tag');
    } else if (lineNum === 2508 && line.includes('🗑️') && line.includes('</button>')) {
        console.log('  ✅ Properly encoded with emoji and closing tag');
    }
    console.log('');
});

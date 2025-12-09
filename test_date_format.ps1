# 简单的日期格式化测试脚本
# 直接在PowerShell环境中运行

Write-Host "=== 日期系统一致性测试 ==="
Write-Host ""

# 测试1: 直接使用PowerShell的日期处理
Write-Host "测试1: PowerShell日期格式化"
$today = Get-Date
Write-Host "当前日期: $today"

# 模拟应用中的formatDate函数
function Format-Date($date) {
    $year = $date.Year
    $month = $date.Month.ToString().PadLeft(2, '0')
    $day = $date.Day.ToString().PadLeft(2, '0')
    return "$year-$month-$day"
}

$todayStr = Format-Date $today
Write-Host "格式化后: $todayStr"
Write-Host ""

# 测试2: 测试不同日期的格式化
Write-Host "测试2: 不同日期的格式化"
$testDate1 = Get-Date "2025-12-08"
$testDate1Str = Format-Date $testDate1
Write-Host "2025-12-08 格式化后: $testDate1Str"

$testDate2 = Get-Date "2024-02-29" # 闰年测试
$testDate2Str = Format-Date $testDate2
Write-Host "2024-02-29 格式化后: $testDate2Str"

Write-Host ""

# 测试3: 验证日期解析
Write-Host "测试3: 日期解析"
function Parse-Date($dateStr) {
    $parts = $dateStr.Split("-")
    return @{ Year = [int]$parts[0]; Month = [int]$parts[1]; Day = [int]$parts[2] }
}

$parsedDate = Parse-Date $todayStr
Write-Host "解析 $todayStr 结果:"
Write-Host "  年: $($parsedDate.Year)"
Write-Host "  月: $($parsedDate.Month)"
Write-Host "  日: $($parsedDate.Day)"

Write-Host ""

# 测试4: 测试日期显示格式
Write-Host "测试4: 日期显示格式"
function Format-DateForDisplay($date) {
    if ($date -is [string]) {
        $date = Get-Date $date
    }
    return "$($date.Year)年$($date.Month)月$($date.Day)日"
}

$displayDate = Format-DateForDisplay $today
Write-Host "当前日期显示格式: $displayDate"

Write-Host ""

# 总结
Write-Host "=== 测试总结 ==="
Write-Host "1. 使用Format-Date函数确保所有日期格式一致: YYYY-MM-DD"
Write-Host "2. 该函数与应用中的formatDate函数实现相同的逻辑"
Write-Host "3. 避免使用toISOString()来防止时区问题"
Write-Host "4. 所有日期处理都基于本地时间，确保一致性"
Write-Host ""
Write-Host "测试完成!"
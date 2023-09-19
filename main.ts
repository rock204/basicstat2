input.onButtonPressed(Button.A, function () {
    serial.writeValue("平均値", BasicStat.calculateMean(配列))
    serial.writeValue("標準誤差", BasicStat.calculateES(配列))
    serial.writeValue("中央値", BasicStat.calculateMedian(配列))
    serial.writeValue("最頻値", BasicStat.calculateMode(配列))
    serial.writeValue("標準偏差", BasicStat.calculateStandardDeviation(配列))
    serial.writeValue("分散", BasicStat.calculateVariance(配列))
    serial.writeValue("尖度", BasicStat.calculateKurtosis(配列))
    serial.writeValue("歪度", BasicStat.calculateSkewness(配列))
    serial.writeValue("範囲", BasicStat.calculateRange(配列))
    serial.writeValue("最小値", BasicStat.calculateMin(配列))
    serial.writeValue("最大値", BasicStat.calculateMax(配列))
    serial.writeValue("合計値", BasicStat.calculateSum(配列))
    serial.writeValue("データス数", 配列.length)
})
let 配列: number[] = []
配列 = [
1,
2,
3,
4,
1,
3,
5,
6,
4,
1,
2,
5,
7,
9,
2
]
serial.writeLine("---結果--")

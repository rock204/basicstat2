// カスタムブロック: 統計量を計算する
// リストを入力として受け取り、中央値、最頻値、分散、尖度、歪度、範囲、合計値を計算します。

namespace BasicStat {
    /**
     * リストの中央値を計算します。
     * @param numbers 数値のリスト
     * @returns 中央値
     */
    //% block="リストの中央値を計算する %numbers=variables_get(myList)"
    export function calculateMedian(numbers: number[]): number {
        const sortedNumbers = numbers.slice().sort((a, b) => a - b);
        const middle = Math.floor(sortedNumbers.length / 2);
        if (sortedNumbers.length % 2 === 0) {
            return (sortedNumbers[middle - 1] + sortedNumbers[middle]) / 2;
        } else {
            return sortedNumbers[middle];
        }
    }


    /**
         * リストの最頻値を計算します。
         * @param numbers 数値のリスト
         * @returns 最頻値のリスト
         */
    //% block="リストの最頻値を計算する %numbers=variables_get(myList)"
    export function calculateMode(numbers: number[]): number[] {
        const frequencyMap: number[] = [];
        let maxFrequency = 0;

        for (let i = 0; i < numbers.length; i++) {
            frequencyMap.push(0);
        }

        for (let i = 0; i < numbers.length; i++) {
            frequencyMap[i] = 1;
            for (let j = i + 1; j < numbers.length; j++) {
                if (numbers[i] === numbers[j]) {
                    frequencyMap[i]++;
                    frequencyMap[j] = -1;
                }
            }
        }

        for (let i = 0; i < numbers.length; i++) {
            if (frequencyMap[i] !== -1 && frequencyMap[i] > maxFrequency) {
                maxFrequency = frequencyMap[i];
            }
        }

        const modeList: number[] = [];
        for (let i = 0; i < numbers.length; i++) {
            if (frequencyMap[i] === maxFrequency) {
                modeList.push(numbers[i]);
            }
        }

        return modeList;
    }

    /**
   * リストの分散を計算します。
   * @param numbers 数値のリスト
   * @returns 分散
   */
    //% block="リストの分散を計算する %numbers=variables_get(myList)"
    export function calculateVariance(numbers: number[]): number {
        const mean = calculateMean(numbers);
        let sumOfSquares = 0;
        for (let i = 0; i < numbers.length; i++) {
            sumOfSquares += (numbers[i] - mean) ** 2;
        }
        return sumOfSquares / numbers.length;
    }
    /**
     * リストの尖度を計算します。
     * @param numbers 数値のリスト
     * @returns 尖度
     */
    //% block="リストの尖度を計算する %numbers=variables_get(myList)"
    export function calculateKurtosis(numbers: number[]): number {
        const mean = calculateMean(numbers);
        const n = numbers.length;
        let sumOfFourthPowerDeviations = 0;
        for (let i = 0; i < n; i++) {
            sumOfFourthPowerDeviations += (numbers[i] - mean) ** 4;
        }
        const variance = calculateVariance(numbers);
        return (sumOfFourthPowerDeviations / n) / (variance ** 2) - 3;
    }

    /**
     * リストの歪度を計算します。
     * @param numbers 数値のリスト
     * @returns 歪度
     */
    //% block="リストの歪度を計算する %numbers=variables_get(myList)"
    export function calculateSkewness(numbers: number[]): number {
        const mean = calculateMean(numbers);
        const n = numbers.length;
        let sumOfCubedPowerDeviations = 0;
        for (let i = 0; i < n; i++) {
            sumOfCubedPowerDeviations += (numbers[i] - mean) ** 3;
        }
        const variance = calculateVariance(numbers);
        return (sumOfCubedPowerDeviations / n) / (variance ** 1.5);
    }

    /**
     * リストの範囲を計算します。
     * @param numbers 数値のリスト
     * @returns 範囲
     */
    //% block="リストの範囲を計算する %numbers=variables_get(myList)"
    export function calculateRange(numbers: number[]): number {
        const max = calculateMax(numbers);
        const min = calculateMin(numbers);
        return max - min;
    }

    /**
     * リストの合計値を計算します。
     * @param numbers 数値のリスト
     * @returns 合計値
     */
    //% block="リストの合計値を計算する %numbers=variables_get(myList)"
    export function calculateSum(numbers: number[]): number {
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        return sum;
    }

    /**
     * リストの平均値を計算します。
     * @param numbers 数値のリスト
     * @returns 平均値
     */
    //% block="リストの平均値を計算する %numbers=variables_get(myList)"
    export function calculateMean(numbers: number[]): number {
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        return sum / numbers.length;
    }

    /**
     * リストの最大値を計算します。
     * @param numbers 数値のリスト
     * @returns 最大値
     */
    //% block="リストの最大値を計算する %numbers=variables_get(myList)"
    export function calculateMax(numbers: number[]): number {
        let max = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] > max) {
                max = numbers[i];
            }
        }
        return max
    }

    /**
     * リストの最小値を計算します。
     * @param numbers 数値のリスト
     * @returns 最小値
     */
    //% block="リストの最小値を計算する %numbers=variables_get(myList)"
    export function calculateMin(numbers: number[]): number {
        let min = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] < min) {
                min = numbers[i];
            }
        }
        return min;
    }

    /**
     * リストの標準偏差を計算します。
     * @param numbers 数値のリスト
     * @returns 標準偏差
     */
    //% block="リストの標準偏差を計算する %numbers=variables_get(myList)"
    export function calculateStandardDeviation(numbers: number[]): number {
        let mean = calculateMean(numbers);
        let sumOfSquares = 0;
        for (let i = 0; i < numbers.length; i++) {
            sumOfSquares += (numbers[i] - mean) * (numbers[i] - mean);
        }
        let variance = sumOfSquares / numbers.length;
        return Math.sqrt(variance);
    }
}

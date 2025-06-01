function lengthOfLastWord(str: string): number {
    const trimedStr = str.trim()

    if (!trimedStr.length) return 0


    const strArr = trimedStr.split(' ')

    return strArr[strArr.length-1].length
};
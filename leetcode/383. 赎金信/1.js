/**
 * 
 * @param {string} ransomNote 
 * @param {string} magazine 
 */
var canConstruct = function (ransomNote, magazine) {
    ransomNote = ransomNote.split('').sort();
    magazine = magazine.split('').sort();
    let slowPointer = 0, fastPointer = 0;
    for (; fastPointer < magazine.length; fastPointer++) {
        if (magazine[fastPointer] === ransomNote[slowPointer]) {
            slowPointer++;
        }
    }
    return slowPointer === ransomNote.length;
};


console.log(canConstruct('awsd','assdddd'));
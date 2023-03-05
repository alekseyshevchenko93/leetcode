/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const map = {};
    const reverseMap = {};
    
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] && map[s[i]] !== t[i]) {
            return false;
        } 
        
        map[s[i]] = t[i];
        
        if (reverseMap[t[i]] && reverseMap[t[i]] !== s[i]) {
            return false;
        }
        
        reverseMap[t[i]] = s[i];
    }
    
    for (let i = 0; i < t.length; i++) {
        if (t[i] !== map[s[i]]) {
            return false;
        }
    }
    
    return true;
};

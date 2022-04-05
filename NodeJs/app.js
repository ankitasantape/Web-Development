// ye code JS me execute hoga but NodeJS me nahi hoga, becoz JS ka code browser pe chalta hai jo ki updated hota hai aur
//  NodeJS ka code lower version pe chalata hai isiliye support nhi krta
// To isko kaise resolve kre ? So, we will use module instead of import-export
// export let a=10;
// export let b=20;

module.exports = {
    x:10,
    y:20,
    z: function(){
        return 10;
    }

}
// Author Davide Scannapieco
var objects = [
    {
        "code": "1",
        "def": "errOSACantCoerce = errAECoercionFail",
        "description": "Signaled when a value can’t be coerced to the desired type."
    },
    {
        "code": "2",
        "def": "errOSACantAccess = errAENoSuchObject",
        "description": "Signaled when an object is not found in a container."
    },
    {
        "code": "3",
        "def": "errOSACantAssign = -10006",
        "description": "Signaled when an object cannot be set in a container"
    },
    {
        "code": "4",
        "def": "errOSAGeneralError = -2700",
        "description": "Signaled by user scripts or applications when no actual error code is to be returned."
    },
    
    {
        "code": "5",
        "def": "errOSADivideByZero = -2701",
        "description": "Signaled when there is an attempt to divide by zero."
    },
    
    {
        "code": "6",
        "def": "errOSANumericOverflow = -2702",
        "description": "Signaled when integer or real value is too large to be represented"
    },
    {
        "code": "7",
        "def": "errOSACantLaunch = -2703",
        "description": "Signaled when application can’t be launched or when it is remote and program linking is not enabled"
    },
    {
        "code": "8",
        "def": "errOSAAppNotHighLevelEventAware = -2704",
        "description": "Signaled when an application can’t respond to AppleEvents."
    },
    {
        "code": "9",
        "def": "errOSACorruptTerminology = -2705",
        "description": "Signaled when an application’s terminology resource is not readable."
    },
    {
        "code": "10",
        "def": "errOSAStackOverflow = -2706",
        "description": "Signaled when the runtime stack overflows"
    },
   {
        "code": "11",
        "def": "errOSAInternalTableOverflow = -2707",
        "description": "Signaled when a runtime internal data structure overflows."
    },
    {
        "code": "12",
        "def": "errOSADataBlockTooLarge = -2708",
        "description": "Signaled when an intrinsic limitation is exceeded for the size of a value or data structure."
    },
    {
        "code": "13",
        "def": "errOSACantGetTerminology ",
        "description": "Signaled when a runtime internal data structure overflows."
    },
];
















function handleClick() {
    for (var i = 0; i < objects.length; i++) {
        for (key in objects[i]) {
            if (objects[i].code == $('input[name=lname]').val()) {
                $('.code').text(objects[i].code);
                $('.def').text(objects[i].def);
                $('.text').text(objects[i].description);
                break;
            }
        }
    }
    return false;
}
function handleClickRandom() {
    for (var i = 0; i < objects.length; i++) {
        for (key in objects[i]) {
            if (objects[i].code == Math.floor(Math.random() * (13))+1){
                $('.code').text(objects[i].code);
                $('.def').text(objects[i].def);
                $('.text').text(objects[i].description);
                break;
            }
        }
    }
    return false;
}
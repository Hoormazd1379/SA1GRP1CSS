
//Author Davide Scannapieco 

var objects = [
    {
        "code": "1",
        "def": "Illegal function call",
        "description": "Program error, verify the program has all the latest updates. If updated, try reinstalling the program. If you continue to have the same errors, contact the software developer."
    },
    {
        "code": "2",
        "def": "Overflow",
        "description": "Program error, verify the program has all the latest updates. If updated, try reinstalling the program. If you continue to have the same errors, contact the software developer."
    },
    {
        "code": "3",
        "def": "Out of memory",
        "description": "Caused when the computer does not meet the program's system requirements or too much memory is already being used for the program to run. If your computer meets the requirements, first try reinstalling the program to make sure it's not an issue with the program installation. If this does not resolve your issue see out of memory troubleshooting steps."
    },
    {
        "code": "4",
        "def": "Subscript out of range",
        "description": "Program error, verify the program has all the latest updates. If updated, try reinstalling the program. If you continue to have the same errors, contact the software developer."
    },
    {
        "code": "5",
        "def": "Duplicate definition",
        "description": "Program error, verify the program has all the latest updates. If updated, try reinstalling the program. If you continue to have the same errors, contact the software developer."
    },
    {
        "code": "6",
        "def": "Division by zero",
        "description": "Problem with a math formula in the program or the program's code. Verify no software updates are available for the program causing this error."
    },
    {
        "code": "7",
        "def": "Type Mismatch",
        "description": "Make sure your system regional settings are set up correctly and that the program you're running is made for your version of Windows."
    },
    {
        "code": "8",
        "def": "Out of string space",
        "description": "Program error, verify the program has all the latest updates. If updated, try reinstalling the program. If you continue to have the same errors, contact the software developer."
    },
    {
        "code": "9",
        "def": "No Resume",
        "description": "Program error, verify the program has all the latest updates. If updated, try reinstalling the program. If you continue to have the same errors, contact the software developer."
    },
    {
        "code": "10",
        "def": "Resume without error",
        "description": "Program error, verify the program has all the latest updates. If updated, try reinstalling the program. If you continue to have the same errors, contact the software developer."
    },
    {
        "code": "11",
        "def": "Out of stack space",
        "description": "Caused by a program or memory error. First try going through the out of memory troubleshooting steps."
    },
    {
        "code": "12",
        "def": "Sub or Function not defined",
        "description": "Program error, verify the program has all the latest updates. If updated, try reinstalling the program. If you continue to have the same errors, contact the software developer."
    },
    {
        "code": "13",
        "def": "Error in loading DLL",
        "description": "Caused with a bad installation or an issue caused after another program is installed that replaced the program's DLL. Close all programs and TSRs and try installing the program again."
    },
    {
        "code": "14",
        "def": "Bad file name or number",
        "description": "Program error, verify the program has all the latest updates. If updated, try reinstalling the program. If you continue to have the same errors, contact the software developer."
    },
    {
        "code": "15",
        "def": "File not found",
        "description": "File required by the program to run is not found. Program needs to be reinstalled or missing file(s) need to be copied back to the computer."
    },
    {
        "code": "16",
        "def": "Bad file mode",
        "description": "Program error, verify the program has all the latest updates. If updated, try reinstalling the program. If you continue to have the same errors, contact the software developer."
    },
    {
        "code": "17",
        "def": "File already open",
        "description": "Program or file associated with program is being used and program does not have access to use it. Try closing all open and background programs and run program again."
    },
    {
        "code": "18",
        "def": "File already exist",
        "description": "File already exists	Program error, verify the program has all the latest updates. If updated, try reinstalling the program. If you continue to have the same errors, contact the software developer"
    },
    {
        "code": "19",
        "def": "Disk full",
        "description": "The disk, for example, the hard drive does not have enough space for the program to run or store copied files. Free up disk space on the computer hard drive."
    },
    {
        "code": "20",
        "def": "Input past end of file",
        "description": "Program error, verify the program has all the latest updates. If updated, try reinstalling the program. If you continue to have the same errors, contact the software developer."
    }
    ,
    {
        "code": "21",
        "def": "Bad record number",
        "description": "Program error, verify the program has all the latest updates. If updated, try reinstalling the program. If you continue to have the same errors, contact the software developer."
    }
    ,
    {
        "code": "22",
        "def": "Bad file name",
        "description": "Program error, verify the program has all the latest updates. If updated, try reinstalling the program. If you continue to have the same errors, contact the software developer."
    }
    ,
    {
        "code": "23",
        "def": "Device unavailable",
        "description": "A hardware device or necessary requirement for the program is not being found. Verify all hardware and software required by the program is installed. If you continue to have the same issues, verify the latest updates are installed for the program as well as any hardware device the program needs."
    }
    ,
    {
        "code": "24",
        "def": "Permission denied",
        "description": "The location of where the program is being copied to does not have proper rights. Or a file that is trying to be copied over because it's currently being used. Try closing all programs and TSRs and running/installing the program again."
    }
    ,
    {
        "code": "25",
        "def": "Disk not ready",
        "description": "Verify you have proper rights."
        
    }
    ,
    {
        "code": "26",
        "def": "Can't rename with different drive",
        "description": "Program error, verify the program has all the latest updates. If updated, try reinstalling the program. If you continue to have the same errors, contact the software developer."
    }
    ,
    {
        "code": "27",
        "def": "Path/File access error",
        "description": "Program does not have rights or access to a file. Often this is caused when a program is trying to access a network file it doesn't have proper access to either because of network privileges or something is blocking the program. For example, if the file is being used by another program or is read-only."
    }
    ,
    {
        "code": "28",
        "def": "Path not found",
        "description": "Directory of where the program needs to be copied to or files associated with the program need to be copied to is missing. Try reinstalling the program."
    }
    ,
    {
        "code": "29",
        "def": "Object variable set to Nothing",
        "description": "Program error, verify the program has all the latest updates. If updated, try reinstalling the program. If you continue to have the same errors, contact the software developer."
    }
    ,
    {
        "code": "30",
        "def": "Invalid pattern",
        "description": "Program error, verify the program has all the latest updates. If updated, try reinstalling the program. If you continue to have the same errors, contact the software developer."
    }
    ,
    {
        "code": "31",
        "def": "Illegal use of NULL",
        "description": "Program error, verify the program has all the latest updates. If updated, try reinstalling the program. If you continue to have the same errors, contact the software developer."
    }
    ,
    {
        "code": "32",
        "def": "Command failed",
        "description": "Program error, verify the program has all the latest updates. If updated, try reinstalling the program. If you continue to have the same errors, contact the software developer."
    }
    ,
    {
        "code": "33",
        "def": "A file is missing or invalid",
        "description": "An associated program file is missing or corrupt. Try reinstalling the program."
    }
    ,
    {
        "code": "34",
        "def": "Object creation failed",
        "description": "Program is corrupted, try reinstalling the program generating the runtime error."
    }
    ,
    {
        "code": "35",
        "def": "No such property or method",
        "description": "Program error, verify the program has all the latest updates. If updated, try reinstalling the program. If you continue to have the same errors, contact the software developer."
    }
    ,
    {
        "code": "36",
        "def": "Argument type mismatch",
        "description": "Program error, verify the program has all the latest updates. If updated, try reinstalling the program. If you continue to have the same errors, contact the software developer."
    }
    ,
    {
        "code": "37",
        "def": "Object error",
        "description": "Program error, verify the program has all the latest updates. If updated, try reinstalling the program. If you continue to have the same errors, contact the software developer."
    }
    ,
    {
        "code": "38",
        "def": "Input buffer would be larger than 64 K.",
        "description": "Program error, verify the program has all the latest updates. If updated, try reinstalling the program. If you continue to have the same errors, contact the software developer."
    }
    ,
    {
        "code": "39",
        "def": "Operating system error.",
        "description": "Verify the program is compatible with your version of Windows and has any software updates."
    }
    ,
    {
        "code": "40",
        "def": "External procedure not found.",
        "description": "Program error, verify the program has all the latest updates. If updated, try reinstalling the program. If you continue to have the same errors, contact the software developer."
    }
    ,
   
    {
        "code": "41",
        "def": "Global variable type mismatch.",
        "description": "Program error, verify the program has all the latest updates. If updated, try reinstalling the program. If you continue to have the same errors, contact the software developer."
    }
    ,
    {
        "code": "42",
        "def": "User-defined type mismatch.",
        "description": "A setting either in the program shortcut or being defined by the user is correct. Try running the program without any additional settings or variables."
    }
    ,
    {
        "code": "43",
        "def": "External procedure interface mismatch.",
        "description": "Program error, verify the program has all the latest updates. If updated, try reinstalling the program. If you continue to have the same errors, contact the software developer."
    }
    ,
    {
        "code": "44",
        "def": "Out of memory",
        "description": "Computer does not meet the program's system requirements or too much memory is already being used for the program to run.If your computer meets the requirements, try first reinstalling the program to make sure it's not an issue with the program installation. If this does not resolve your issue run through the out of memory troubleshooting steps."
    }
    ,
    {
        "code": "45",
        "def": "DLL is not supported",
        "description": "Bad installation or an issue caused after another program that is installed and replaced the program's DLL. Close all programs and TSRs and try installing the program again."
    }
    ,
  

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
            if (objects[i].code == Math.floor(Math.random() * (45))+1){
                $('.code').text(objects[i].code);
                $('.def').text(objects[i].def);
                $('.text').text(objects[i].description);
                break;
            }
        }
    }
    return false;
}
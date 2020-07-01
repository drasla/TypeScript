let text: string = "";
let statusActive: number = 0;
let isEnabled: boolean = true;

//첫 번째 if 문
if (statusActive || text) {
    console.log("1");
}

// 두 번째 if 문
if (isEnabled && 2 > 1) {
    console.log("2");
}
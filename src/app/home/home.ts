export class Home {

    public static fromJson(home: any): Home {
        return new Home(home.title, home.name, home.text, home.showPicture);
    }

    constructor(public title: string, public name: string, public text: string[], public showPicture = false) {
    }
}

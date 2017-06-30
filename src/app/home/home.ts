export class Home {

    public static fromJson(home: any): Home {
        return new Home(home.title, home.name, home.text, home.linkedIn, home.showPicture);
    }

    constructor(public title: string, public name: string, public text: string[], public linkedIn: string, public showPicture = false) {
    }
}

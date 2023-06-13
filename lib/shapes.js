// parent passing color
class shape {
    constructor() {
        this.color = ""
    }

}

// circle class inherits properties for shape class
class circle {
    render(){
        //setup x,y cordinates as well as radius of shape
        return `<circle cx='150' cy'115' r='80' fill='${this.color}'/>`;
    }

}

// square class, inherits properties from shape class
class square {
    render(){
        //setup x,y cordinates as well as width and height of shape
        return `<rect x='73' y='40' width='160' height ='160' fill='${this.color}'/>`;
    }

}

// triangle class, inherits properties from shape class
class triangle {
    render() {
        //setup x,y cordinates on all 3 points
        return `<polygon points='150, 18 244, 182 56, 182' fillfill='${this.color}'/>`;
    }

}
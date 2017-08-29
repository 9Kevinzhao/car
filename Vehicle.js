var Vehicle= function(e,f,g,a,m){
    let engine = e;
    let fuel = f;
    let gastank = g;
    let averageMPG = a;
    let milesDriven = m;

    function totalmiles(){
        return milesdriven;
    }

    function fuelLeft(){
        return fuel;
    }
    function fill(){
        let percent = Math.cell(Math.random);
        fuel = fuel + percent
        if(fuel>1){
            fuel = 1;
        }

    }

    function drive(h){
        let hours = h
        fuel = fuel - hours*
        milesDriven= milesDriven + hours*averageMPG
    }

    function engineEfficiency(){
        if(engine=4){
            return 1;
        }
        else if(engine=6){
            return 1.20;
        }
        else if(engine=8){
            return 1.36;
        }
        else{
            return null;
        }
    }
}

var Vehicle= function(e,f,g,a,m){
    let engine = e;
    let fuel = f;
    let gastank = g;
    let averageMPG = a;
    let milesDriven = m;

    function totalMiles(){
        return milesDriven;
    }

    function fuelLeft(){
        return fuel;
    }
    function fill(p){
        let percent =p;
        fuel = fuel + percent
        if(fuel>gastank){
            fuel = gastank;
        }
    }

    function drive(h){
        let hours = h;

        if(fuel- hours*engineEfficiency()<0){
          hours= fuel/engineEfficiency();
          fuel=0;
        }
        else{
           fuel = fuel - hours*engineEfficiency();
        }
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
    return {totalMiles,fuelLeft,fill,drive};
}

module.exports = Vehicle;

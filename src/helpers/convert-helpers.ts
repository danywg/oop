export abstract class ConvertHelper {
    public static weight(baseUnit: string, targetUnit: string, value: number): number {
        const myBaseUnit: string = baseUnit.toLowerCase();
        const myTargetUnit: string = targetUnit.toLowerCase();
        if(myBaseUnit == myTargetUnit) {
            return value;
        }else{
            if (myBaseUnit == 'kg'){
                if(myTargetUnit =='g'){
                    return value / 1000;
                }else{
                    if (myTargetUnit == 'mg'){
                        return value / (1000 * 1000);
                    }
                    
                }
            }else { 
                if (myBaseUnit == 'g') {
                    if (myTargetUnit == 'mg') {
                        return value * 1000;
                    }else {
                        if (myTargetUnit == 'kg'){
                            return value / 1000
                        }
                    }
                }

            }
        }

    }
}


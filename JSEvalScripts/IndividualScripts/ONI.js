function writeRecord(Values, year, country, cc){
    for(key in Values){
        var value = Values[key];
        // value : Political Score
        // key   : indicator
        var ind;
        switch(key){
                case 'political_score':
                    ind = "ONIp";
                    break;
                case 'social_score':
                    ind = "ONIs";
                    break;
                case 'tools_score':
                    ind = "ONIit";
                    break;
                case 'conflict/security_score':
                    ind = "ONIcs";
                    break;
                case 'transparency':
                    ind = "ONItr";
                    break;
                case 'consistency':
                    ind = "ONIco";
                    break;
        }

        record = records[i] //Make new variable just called for easier reading
            // Note: this is a pass by reference so a new record is not created
            record.value = { 
                '${ID}' : ind,
                '${CT}' : cc,
                '${DT}' : year,
                '${VL}' : value,
            };
        output.write(record);
        // what is written to the record is what it outputs
    }
}

for(var i = 0; i < records.length; i++) {
    try {
        var cc = records[i].value['country_code'];
        var country = records[i].value['country'];
        var year = records[i].value['testing_date'];
        var Values = {};
        for(key in records[i].value){
            var value = records[i].value[key];
            if(key != 'social_description' && key != 'tools_description' && key != 'conflict_security_description' && key != 'political_description' && key != 'country' && key != 'country_code' && key != 'testing_date' && key != 'url'){
                //records[i].value['Values'][key] = value;
                Values[key] = value;
            }

        }
        // output.write(records[i]);

        // Save the map of values that was originally saved in the Record 
        // Under the 'Values' field
        writeRecord(Values, year, country, cc);

    } catch (e) {
        // Send record to error
        error.write(records[i], e);
    }
}

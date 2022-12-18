let student={
    s_name:'sonali',
    s_adress:'pune',

 

    }

    console.log(student.s_adress,student.s_name);


    const doctor ={
        name1:'om',
        age :20, 
        position : 'dean',

        patiant:{
            name:'shubha',
            address:'nasik',

            clark:{
                name5:'shiva',
                name11:'mahi',
                address:'mumbai'
            }
        
    }}

    console.log(doctor["name1"]);
    console.log(doctor.patiant["name"]);
    console.log(doctor["age"]);
    console.log(doctor.patiant["address"]);
    console.log(doctor.patiant.clark.address);
    console.log(doctor.patiant.clark["name11"]);  //nested object using notation

    console.log(doctor.age,doctor.name1);
    console.log(doctor.patiant.name);
    console.log(doctor.patiant.clark.address,doctor.patiant.name);
    console.log(doctor.patiant.name);

    const student1 ={
        name1:'om',
        age:20,
        marks:{
            math:70,
            science:56,
            clark:{
                name1:'shiva',
            }
        }
    }
    console.log(student1.name1,student1.age);
    console.log(student1.marks.math,student1.marks.science);
    console.log(student1.clark.name1);


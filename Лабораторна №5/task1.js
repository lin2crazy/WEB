var person = 
{ 
	name:"Dmytro", 
	surname:"Zbarovskyi",
	data:"6/4/2001", 
	gender:"male"
};

function remVowels(val)
{              
    return val.replace(/[aeiouy]/gi, "");
}

function remConsonants(val)
{              
    return val.replace(/[bcdfghjklmnpqrstvwxz]/gi, "");
}

function name(val)
{
	var new_name = "";
	if(remVowels(val).length > 3)
	{
		for(var i=0; i<4; i++)
		{
			if(i==1)
			{
				continue;
			}
			new_name +=remVowels(val.toUpperCase())[i];
		}
		return new_name;
	}

	if(remVowels(val).length <3)
	{
		for(var i=0; i<3; i++)
		{
			new_name +=(remVowels(val.toUpperCase())+remConsonants(val.toUpperCase()))[i] ;
		}
		return new_name;
	}

	if(remVowels(val).length ==3)
	{
		new_name=remVowels(val.toUpperCase());
		return new_name;
	}

	if(val.length <3)
	{
		new_name=remVowels(val.toUpperCase)+remConsonants(val.toUpperCase());
		for(var i=0; i<3; i++)
		{
			if(new_name.length != 3)
			{
				new_name += "X";
			}
			else
			{
				break;
			}
		}
		return new_name;
	}
}

function surname(val)
{
	var new_surname = "";
	if(remVowels(val).length > 4)
	{
		for(var i=0; i<3; i++)
		{
			new_surname +=remVowels(val.toUpperCase())[i];
		}
		return new_surname;
	}

	if(val.length <3)
	{
		new_surname=remVowels(val.toUpperCase())+remConsonants(val.toUpperCase());
		for(var i=0; i<3; i++)
		{
			if(new_surname.length != 3)
			{
				new_surname += "X";
			}
			else
			{
				break;
			}
		}
		return new_surname;
	}

	if(val.length ==3)
	{
		new_surname=remVowels(val.toUpperCase())+remConsonants(val.toUpperCase());
		return new_surname;
	}
}

function data(data, gender){
	var day ="";
	var month ="";
	var year ="";
	day=data.split('/')[0];
	month=data.split('/')[1];
	year=data.split('/')[2];

	var new_year = year[2]+year[3];
	var new_day = "";

	if(gender === "female")
	{
		new_day=parseInt(day)+40;
	}
	if(gender === "male" && day < 10)
	{
		new_day="0"+day;
	}
	if(gender === "male" && day >= 10)
	{
		new_day=day;
	}

	var months = { 
		1: "A", 
		2: "B", 
		3: "C", 
		4: "D", 
		5: "E", 
		6: "H", 
		7: "L", 
		8: "M", 
		9: "P", 
		10: "R", 
		11: "S", 
		12: "T" 
	};

	var new_month=months[month];
	var full_data = new_year + new_month + new_day;
	return full_data; 

}
console.log("Task №1");
console.log("Surname:" + person.surname);
console.log("Name:" + person.name);
console.log("Data:" + person.data);
console.log("Gender:" + person.gender);
console.log("Identification code:" + surname(person.surname) + name(person.name) + data(person.data, person.gender));
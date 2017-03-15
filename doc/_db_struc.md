This file shows the structure of the database. If not used your application won't show values.

```sh
e-ray
	erays
	|	erayid1
	|	|	info
	|	|	|	location
	|	|	|	owner
	|	|	performance
	|	|	|	date1 (yyyy_mm_dd format)
	|	|	|	|	time1 (hh_mm format)
	|	|	|	|	|	date
	|	|	|	|	|	timestamp
	|	|	|	|	|	value
	|	|	|	|	time2
	|	|	|	|	...
	|	|	|	date2
	|	|	|	...
	|	|	rain
	|	|	|	date1 (yyyy_mm_dd format)
	|	|	|	|	time1 (hh_mm format)
	|	|	|	|	|	date
	|	|	|	|	|	timestamp
	|	|	|	|	|	value
	|	|	|	|	time2
	|	|	|	|	...
	|	|	|	date2
	|	|	|	...
	|	|	rpm
	|	|	|	date1 (yyyy_mm_dd format)
	|	|	|	|	time1 (hh_mm format)
	|	|	|	|	|	date
	|	|	|	|	|	timestamp
	|	|	|	|	|	value
	|	|	|	|	time2
	|	|	|	|	...
	|	|	|	date2
	|	|	|	...
	|	|	temp
	|	|	|	date1 (yyyy_mm_dd format)
	|	|	|	|	time1 (hh_mm format)
	|	|	|	|	|	date
	|	|	|	|	|	timestamp
	|	|	|	|	|	value
	|	|	|	|	time2
	|	|	|	|	...
	|	|	|	date2
	|	|	|	...
	|	|	waterlevel
	|	|	|	date1 (yyyy_mm_dd format)
	|	|	|	|	time1 (hh_mm format)
	|	|	|	|	|	date
	|	|	|	|	|	timestamp
	|	|	|	|	|	value
	|	|	|	|	time2
	|	|	|	|	...
	|	|	|	date2
	|	|	|	...
	|	|	watertemp
	|	|	|	date1 (yyyy_mm_dd format)
	|	|	|	|	time1 (hh_mm format)
	|	|	|	|	|	date
	|	|	|	|	|	timestamp
	|	|	|	|	|	value
	|	|	|	|	time2
	|	|	|	|	...
	|	|	|	date2
	|	|	|	...
	|	|	windspeed
	|	|	|	date1 (yyyy_mm_dd format)
	|	|	|	|	time1 (hh_mm format)
	|	|	|	|	|	date
	|	|	|	|	|	timestamp
	|	|	|	|	|	value
	|	|	|	|	time2
	|	|	|	|	...
	|	|	|	date2
	|	|	|	...
	|	erayid2
	|	|	info
	|	|	...
	|	...
	|	eraylist
	|		erayid1
	|		|	location
	|		|	owner
	|		|	startDate
	|		erayid2
	|		|	location
	|		|	owner
	|		|	startDate
	|		...
	users
		userid1
		|	info
		|		email
		|		firstname
		|		lastname
		userid2
		|	info
		|		email
		|		firstname
		|		lastname
		...
```
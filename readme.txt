What is it?

Program takes the english name of a fish and returns the fish's species, name, occurance, and local_name. The program is to help verify if a fish is native or invasive. These reef fish are commonly found near shore and will be more easy to observe by fishermen.

For example,

Name (English): Tailjet frogfish

Species:Abantennarius analis 
Occur: native 	
Local name: Pygmy frogfish 

If the fish is local, the text will color green to signify native, else the text will be red. Fish with red text should be removed if seen since many introduced species are harmful to the ecosystem.


The program uses a get file to recieve a html file of a website containing an entire data base on reef fish in Hawaii. The program iterates through the html table. It turns each row in the table into its own object containing the fish information.

Here is the database used for the app.
https://www.fishbase.us/country/CountryChecklist.php?&what=list&trpp=50&c_code=840B&csub_code=&cpresence=present&sortby=alpha2&ext_pic=on&vhabitat=reef&showAll=yes

Use FishBase name to find fish.
-Twospot hawkfish
-Scribbled leatherjacket filefish

How to use:
1. enter the FishBase name, 2 examples below, reframe from entering extra spaces
Example:
"Twospot hawkfish" Good
"Twospot hawkfish " Error Result

https://www.fishbase.us/country/CountryChecklist.php?&what=list&trpp=50&c_code=840B&csub_code=&cpresence=present&sortby=alpha2&ext_pic=on&vhabitat=reef&showAll=yes

2. Click Find and wait until the countdown is finished. Info should be displayed
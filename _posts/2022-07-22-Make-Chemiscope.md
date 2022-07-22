---
title: Steps to making a Chemiscope Representation
created: '2022-07-07T15:07:34.789Z'
modified: '2022-07-14T21:40:23.682Z'
---

# Steps to making a Chemiscope Representation


## Prepare the Files Needed

1) Export the xtc file into a pdb to be read by the script. If you already centered the protein that can be as simple as:

- `gmx trjconv -f protein.xtc -o protein.pdb`

2) Make a plumed file to calculate all of your needed collective variable information. You should print all of them out to a `colvar` file. It can be named whatever your like but the default is usually just called `colvar`.


3) Run the Script!
- `make_chemiscope.py [trajectory_file] [colvar file] [output.json.gz]`

4) Download the .json.gz file and upload it to chemiscope. 


5) Once you have identified the ends of your path in the CV space, you can then identify structures that correspond to these locations.


6) Start by interpolating between these two points with a straight line and find the structures that exist along the straight line path. We will then build the path with that set of structures. 

7) We will use either the `ADAPTIVE PATH` or `PATH CV` collective variable in PLUMED to optimize this path. 


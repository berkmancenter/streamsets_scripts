# Streamsets setup 

## Ubuntu/Windows 10

Windows should use Ubuntun from Windows Store.

0. $ sudo su (Windows 10)
0. \# apt-get update
0. \# apt-get install openjdk-8-jdk
0. \# exit
0. $ vim ~/.bashrc, add: ulimit -n 32768 and: export SDC\_ALLOW\_UNSUPPORTED\_JDK=true
0. $ wget https://archives.streamsets.com/datacollector/2.7.2.0/tarball/streamsets-datacollector-all-2.7.2.0.tgz
0. $ tar xvzf streamsets-datacollector-all-2.7.2.0.tgz
0. $ streamsets-datacollector-2.7.2.0/bin/streamsets dc
0. Navigate to https://localhost:18630
0. Login with user: admin, pass: admin

## Mac

Mac should use Vagrant for persistent development environment (makes it easy).

0. Install Vagrant, Ruby, and Git (have to manually install VirtualBox on Mac)
0. vagrant box add ubuntu/trusty64 (Important Note: MUST USE Ubuntu 14.04 or above to follow StreamSets requirements if there are problems adding the box, install C++ 2010 SP1 Reidistributable Package (x86): https://github.com/mitchellh/vagrant/issues/6852)
0. make folder to host VM (Ubuntu64)
0. vagrant init ubuntu/trusty64 (inside of newly made folder)
0. Download Vagrantfile from https://github.com/dphuang2/dotfiles
0. replace new Vagrantfile made from init with downloaded Vagrantfile
0. vagrant up (inside of folder) (Make sure that the shell that you are in is being "Run as Administrator")
0. add C:\Program Files (x86)\Git\bin to path environment variables (This requires an install of git)
0. vagrant ssh [to ssh into the virtual box]
0. wget https://archives.streamsets.com/datacollector/2.7.2.0/tarball/streamsets-datacollector-all-2.7.2.0.tgz 
0. tar xvzf streamsets-datacollector-all-2.7.2.0.tgz
0. follow steps to install Oracle JDK 8: https://www.digitalocean.com/community/tutorials/how-to-install-java-on-ubuntu-with-apt-get
0. sudo update-alternatives --config java and select Java 8 (only needed in the case that multiple java versions are installed http://www.mkyong.com/java/java-unsupported-major-minor-version-51-0/ for explanation of last two steps)
0. streamsets-datacollector-2.7.2.0/bin/streamsets dc
0. navigate to "55.55.55.5:18630" in browser
0. login with user: admin, pass: admin (important to note that you must use shared folder (/vagrant) to share files with streamsets)


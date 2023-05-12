# Genesis
Django+Python+HTML+CSS+JS+Bootstrap5

Genesis is a web app for dancers and dance teams, where they can book time for training in a dance hall. I am creating the web app using Django. In the app user can sign up, book time for training in the hall, see their olds and news booking, news and upcoming events.
The project now in a developing. In future time will add edits.# Genesis_app

## To run this project in your development machine, follow these steps:

<ol>
<li>Create and activate a virtualenv (you may want to use virtualenvwrapper).</li>

<li>Ensure that the executable pg_config is available on your machine. You can check this using which pg_config. If not, install the dependency with one of the following.

<ul>
<li>macOS: brew install postgresql using Homebrew</li>
<li>Ubuntu: sudo apt-get install libpq-dev</li>
</ul>

<li>Fork this repo and clone your fork:
git clone https://github.com/HelenMayer/Genesis_app</li>

<li>Install dependencies:
pip install -r requirements.txt</li>

<li>Create a development database:
./manage.py migrate</li>

<li>If everything is alright, you should be able to start the Django development server:
./manage.py runserver</li>

<li>Open your browser and go to http://127.0.0.1:8000, you will be greeted with a welcome page.</li>




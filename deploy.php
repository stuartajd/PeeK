<?php
namespace Deployer;

require 'recipe/laravel.php';

// Project name
set('application', 'PeeK');

// Project repository
set('repository', 'git@github.com:stuartajd/peek.git');

// [Optional] Allocate tty for git clone. Default value is false.
set('git_tty', true); 

// Shared files/dirs between deploys 
add('shared_files', []);
add('shared_dirs', []);

// Writable dirs by web server 
add('writable_dirs', []);


// Hosts


host('68.183.35.202')
    ->user('deployer')
//    ->set('branch', 'master')
    ->identityFile('~/.ssh/deployerkey')
    ->set('deploy_path', '/var/www/html');


// Tasks

task('build', function () {
    run('cd {{release_path}} && build');
});

// [Optional] if deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');

// Migrate database before symlink new release.

before('deploy:symlink', 'artisan:migrate');


module.exports = {
  apps : [{
    name: "client",
    script: 'npm start'
  }],

  deploy : {
    production : {
      key  : 'arthur.pem',
      user : 'ubuntu',
      host : '52.53.148.146',
      ref  : 'origin/master',
      repo : 'git@github.com:codecallogic/avp-arch.git',
      path : '/home/ubuntu/client',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh && npm install --legacy-peer-deps && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};
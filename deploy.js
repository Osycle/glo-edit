const dotenv = require('dotenv');
const path = require('path');
const Deployer = require('ssh-deploy-release');

dotenv.config({
  path: path.join(
    __dirname,
    process.env.NODE_ENV === 'development' ? '.env.development' : '.env',
  ),
});

const {
  SSH_HOST,
  SSH_USER,
  SSH_PASSWORD,
  DEPLOY_PATH,
  LOCAL_PATH,
} = process.env;

const options = {
  localPath: LOCAL_PATH,
  host: SSH_HOST,
  username: SSH_USER,
  password: SSH_PASSWORD,
  deployPath: DEPLOY_PATH,
  currentReleaseLink: LOCAL_PATH,
};

const deployer = new Deployer(options)
const args = process.argv.slice(2)

if (args.length) {
  args.forEach((arg) => {
    if (arg === 'rollback') {
      return deployer.rollbackToPreviousRelease(() => {
        console.log('\x1b[32m', '😎 Rollback preview release')
      })
    }

    console.warn('\x1b[31m', `😕 Invalid command: ${arg}`)
  })
} else {
  deployer.deployRelease(() => {
    console.log('\x1b[32m', `🤘 Deploy ${process.env.NODE_ENV} success!`)
  })
}

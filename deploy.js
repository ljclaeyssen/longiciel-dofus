const fs = require('fs-extra');
const { execSync } = require('child_process');

const project = 'longiciel-dofus';
const repoName = 'longiciel-dofus';

(async () => {
  try {
    execSync(
      `ng build --base-href /${repoName}/ --output-path docs --configuration production`,
      { stdio: 'inherit' }
    );

    await fs.copy(`./docs/browser/`, `./docs/`);

    await fs.remove(`./docs/browser`);

    execSync(`npx angular-cli-ghpages --dir=docs`, { stdio: 'inherit' });

    console.log('Déploiement terminé avec succès !');
  } catch (error) {
    console.error('Erreur lors du déploiement :', error);
    process.exit(1);
  }
})();

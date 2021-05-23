var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();

console.log("Starting FTP deployement");

const config = () => { 
    return {
        host: process.env.FTP_HOST,
        // host: "ftp.sc3bath3698.universe.wf",
        port: 21,
        user: process.env.FTP_USER,
        // user: "travis@webqbe.com",
        password: process.env.FTP_PASSWORD,
        // password: "A1jFbA1jFb",
        localRoot: "./",
        remoteRoot: "/",
        include: ["*", "**/*"],
        exclude: ["node_modules/**", "node_modules/**/.*", "node_modules/**/.*/**", ".git/**", "src/__test__/**", ".*", "*.ts"],
        sftp: false,
        forcePasv: true,
    }
}


if (process === null) {
    console.error("Error : process is null.");
}
else {

    console.log("# ftp.host :", config().host);
    console.log("# ftp.user :", config().user);
    console.log("# ftp.password.length :", config().password.length);
    console.log("# ftp.localRoot :", config().localRoot);
    console.log("# ftp.remoteRoot :", config().remoteRoot);
    console.log("# ftp.port :", config().port);

    ftpDeploy.on("uploading", function(data) {
        console.log(`(${Math.floor(( data.transferredFileCount / data.totalFilesCount ) * 100)}%) - Uploading ${data.filename} ...`)
    });

    ftpDeploy.on("upload-error", function(data) {
        console.warn(`Upload error on ${data.filename} - `, data)
    });

    ftpDeploy
    .deploy(config())
    .then(res => console.log("ftpDeploy done :", res))
    .catch(err => console.error('Error while deploying (ftpDeploy) :', err));
    
}
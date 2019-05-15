module.exports = (app) => {
  /**
   * Echo Function
   */
  app.all('*', (req, res, next) => {
    const { headers, body, cookies, hostname, ip, ips, method, params, path, protocol, query } = req;
    const echo = { headers, body, cookies, hostname, ip, ips, method, params, path, protocol, query };

    console.log('\n[ECHO]');
    console.dir(echo);

    res.send(echo);
  });
};

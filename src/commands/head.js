'use strict';

const interfacer = require('./../util/interfacer');
const fs = require('fs');
const fsAutocomplete = require('vorpal-autocomplete-fs');

const head = {

  exec(args, options) {
    const self = this;
    options = options || {};

    options.argsType = args.stdin === undefined ? 'files' : 'stdin';
    options.n = options.n === undefined ? 10 : options.n;

    if (options.n < 1) {
      self.log('Option n must be a positive integer.');
      return 1;
    }

    if (options.argsType === 'stdin') {
      self.log(head.readLines(args.stdin[0], options.n));
      return 0;
    }

    let files = args.files || args;
    files = (files === undefined) ? [] : files;
    files = (typeof files === 'string') ? String(files).split(' ') : files;
    files = files.filter(arg => String(arg).trim() !== '');

    let stdout = '';
    let writeHeaders = false;
    if (files.length > 1) {
      writeHeaders = true;
    }

    const content = [];
    for (let i = 0; i < files.length; i++) {
      try {
        content[i] = fs.readFileSync(files[i]).toString();
      } catch (e) {
        self.log(`head: ${files[i]}: No such file or directory`);
        return 1;
      }
    }

    for (let i = 0; i < files.length; i++) {
      if (writeHeaders) {
        stdout += `${i > 0 ? '\n\n' : ''}==> ${files[i]} <==\n`;
      }

      stdout += head.readLines(content[i], options.n);
    }

    self.log(stdout);
    return 0;
  },

  readLines(content, numberOfLines) {
    let stdout = '';
    const contentArray = content.split('\n');
    const linesToRead = numberOfLines >= contentArray.length ? contentArray.length : numberOfLines;
    for (let i = 0; i < linesToRead; i++) {
      if (stdout === '') {
        stdout = contentArray[i];
        continue;
      }

      stdout += `\n${contentArray[i]}`;
    }

    return stdout;
  }
};

module.exports = function (vorpal) {
  if (vorpal === undefined) {
    return head;
  }
  vorpal.api.head = head;
  vorpal
      .command('head [files...]')
      .option('-n [number]', 'The first number of lines will be copied to stdout.')
      .autocomplete(fsAutocomplete())
      .action(function (args, callback) {
        args.options = args.options || {};
        return interfacer.call(this, {
          command: head,
          args,
          options: args.options,
          callback
        });
      });
};

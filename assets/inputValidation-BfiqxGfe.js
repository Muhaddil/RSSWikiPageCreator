function r(t,n){var r;const o=RegExp(n).exec(t);return 1===(null==o?void 0:o.length)&&(null==(r=o[0])?void 0:r.length)===t.length}function c(t){const n=new RegExp(/[+-](?:[0-9]{1,3})\.(?:[0-9]{2}), [+-](?:[0-9]{1,3})\.(?:[0-9]{2})/);return!t||r(t,n)}function l(t){try{const n=new URL(t);return"http:"===n.protocol||"https:"===n.protocol}catch{return!1}}export{l as i,r,c as v};

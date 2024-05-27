const posts = require("../database/posts.js");

const index = (req, res) => {

    // Content negotiation
    res.format({
        html: () => {
            let html = '<ul>';
            posts.forEach(post => {
                html += `<li>
                    <h2>${post.title}</h2>
                    <p>${post.content}</p>
                    <img width="250" src=${`/${post.image}`} />
                </li>`
            })
            html += '</ul>';
            res.send(html);
        },
        json: () => {
            res.json({
                data: posts,
                count: posts.length
            })
        }
    })
}

module.exports = {
    index,
    add
}
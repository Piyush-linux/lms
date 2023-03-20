# T A S K

---

- [ ] Auth : Regsiter & Login

# RESOURCE

Dashboard : https://www.tailwind-kit.com/components/data

## UI
- https://app-tailwind.preview.uideck.com/
icon : https://www.flaticon.com/free-icon/cat_6148636?term=cat&page=12&position=40&origin=search&related_id=6148636

## Tailwind
- https://kutty.netlify.app/components/
- https://merakiui.com/
- https://www.hyperui.dev/
- https://www.tailwind-kit.com/components/team
- https://mambaui.com/components/feature
- https://tailwindflex.com/tag/feature
- https://www.floatui.com/components/
- https://wickedblocks.dev/groups/sidebar/

- https://dev.to/mariann93502220/30-free-tailwind-css-templates-to-kick-start-your-next-project-3igo
- https://kitwind.io/products/kometa/components/contents
- https://www.creative-tim.com/product/vue-notus?ref=vn-index
- https://github.com/unlight/tailwind-components#hero
- https://github.com/slim-python/tailwind-css-free-components

## Icons
- https://icon-sets.iconify.design/basil/flask-outline/
- https://icon-sets.iconify.design/icon-park-solid/boy-one/
- https://icon-sets.iconify.design/gg/boy/
- https://css.gg/airplane

## Sitemap
- Web(website)
	- home
	- blog
	- team
	- about
- Admin(strapi cms)
	- profile
	- courses
	- enrolled
	- shop
- Profile(login)
	- Courses
	- User
	- 

## Module

### Web
- [ ] Dashb

### Admin
- [x] CMS Setup  & Model
- [ ] database
- [ ] git

### Blog
- [x] Render md
- [ ] Fetch() : /blogs , /blogs/:id , /blogs/?category=...

# API


## Auth
```sh
echo '{"username":"piyush","email":"piyush@gmail.com","password":"piyush"}' | http http://localhost:1337/api/auth/local/register

echo '{"identifier":"piyush@gmail.com","password":"piyush"}' | http POST ':1337/api/auth/local'
# {
#     "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc5MjQ4NTQwLCJleHAiOjE2ODE4NDA1NDB9.OpskD6Xy6hwS58aJpAVZAldovmZRc8usIBXUnx0w1NY",
#     "user": {
#         "email": "piyush@gmail.com",
#         "id": 1,
#         "provider": "local",
#         "username": "piyush"
#     }
# }
http -A bearer -a 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc5MjQ4NTQwLCJleHAiOjE2ODE4NDA1NDB9.OpskD6Xy6hwS58aJpAVZAldovmZRc8usIBXUnx0w1NY'  :1337/api/courses
# data ...
```

---

# HELP
- [strapi auth](https://strapi.io/blog/implementing-authenticated-api-requests-to-strapi)
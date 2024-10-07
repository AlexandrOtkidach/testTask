const list = [
    {
        name:'Jane Cooper',
        company:'Microsoft',
        phone:'(225) 555-0118',
        email:'jane@microsoft.com',
        country:'United States',
        status:true,
    },
    {
        name:'Floyd Miles',
        company:'Yahoo',
        phone:'(205) 555-0100',
        email:'floyd@yahoo.com',
        country:'Kiribati',
        status:false,
    },
    {
        name:'Ronald Richards',
        company:'Adobe',
        phone:'(302) 555-0107',
        email:'ronald@adobe.com',
        country:'Israel',
        status:false,
    },
    {
        name:'Marvin McKinney',
        company:'Tesla',
        phone:'(252) 555-0126',
        email:'marvin@tesla.com',
        country:'Iran',
        status:true,
    },
    {
        name:'Jerome Bell',
        company:'Google',
        phone:'(629) 555-0129',
        email:'jerome@google.com',
        country:'Réunion',
        status:true,
    },
    {
        name:'Kathryn Murphy',
        company:'Microsoft',
        phone:'(406) 555-0120',
        email:'kathryn@microsoft.com',
        country:'Curaçao',
        status:true,
    },
    {
        name:'Jacob Jones',
        company:'Yahoo',
        phone:'(208) 555-0112',
        email:'jacob@yahoo.com',
        country:'Brazil',
        status:true,
    },
    {
        name:'Kristin Watson',
        company:'Facebook',
        phone:'(704) 555-0127',
        email:'kristin@facebook.com',
        country:'Åland Islands',
        status:false,
    },
    {
        name:'Jane Cooper',
        company:'Microsoft',
        phone:'(225) 555-0118',
        email:'jane@microsoft.com',
        country:'United States',
        status:true,
    },
    {
        name:'Floyd Miles',
        company:'Yahoo',
        phone:'(205) 555-0100',
        email:'floyd@yahoo.com',
        country:'Kiribati',
        status:false,
    },
    {
        name:'Ronald Richards',
        company:'Adobe',
        phone:'(302) 555-0107',
        email:'ronald@adobe.com',
        country:'Israel',
        status:false,
    },
    {
        name:'Marvin McKinney',
        company:'Tesla',
        phone:'(252) 555-0126',
        email:'marvin@tesla.com',
        country:'Iran',
        status:false,
    },
    {
        name:'Jerome Bell',
        company:'Google',
        phone:'(629) 555-0129',
        email:'jerome@google.com',
        country:'Réunion',
        status:false,
    },
    {
        name:'Kathryn Murphy',
        company:'Microsoft',
        phone:'(406) 555-0120',
        email:'kathryn@microsoft.com',
        country:'Curaçao',
        status:false,
    },
    {
        name:'Jacob Jones',
        company:'Yahoo',
        phone:'(208) 555-0112',
        email:'jacob@yahoo.com',
        country:'Brazil',
        status:false,
    },
    {
        name:'Kristin Watson',
        company:'Facebook',
        phone:'(704) 555-0127',
        email:'kristin@facebook.com',
        country:'Åland Islands',
        status:true,
    },
    {
        name:'Jane Cooper',
        company:'Microsoft',
        phone:'(225) 555-0118',
        email:'jane@microsoft.com',
        country:'United States',
        status:true,
    },
    {
        name:'Floyd Miles',
        company:'Yahoo',
        phone:'(205) 555-0100',
        email:'floyd@yahoo.com',
        country:'Kiribati',
        status:true,
    },
    {
        name:'Ronald Richards',
        company:'Adobe',
        phone:'(302) 555-0107',
        email:'ronald@adobe.com',
        country:'Israel',
        status:true,
    },
    {
        name:'Marvin McKinney',
        company:'Tesla',
        phone:'(252) 555-0126',
        email:'marvin@tesla.com',
        country:'Iran',
        status:true,
    },
    {
        name:'Jerome Bell',
        company:'Google',
        phone:'(629) 555-0129',
        email:'jerome@google.com',
        country:'Réunion',
        status:false,
    },
    {
        name:'Kathryn Murphy',
        company:'Microsoft',
        phone:'(406) 555-0120',
        email:'kathryn@microsoft.com',
        country:'Curaçao',
        status:false,
    },
    {
        name:'Jacob Jones',
        company:'Yahoo',
        phone:'(208) 555-0112',
        email:'jacob@yahoo.com',
        country:'Brazil',
        status:false,
    },
    {
        name:'Kristin Watson',
        company:'Facebook',
        phone:'(704) 555-0127',
        email:'kristin@facebook.com',
        country:'Åland Islands',
        status:false,
    },
    {
        name:'Jane Cooper',
        company:'Microsoft',
        phone:'(225) 555-0118',
        email:'jane@microsoft.com',
        country:'United States',
        status:true,
    },
    {
        name:'Floyd Miles',
        company:'Yahoo',
        phone:'(205) 555-0100',
        email:'floyd@yahoo.com',
        country:'Kiribati',
        status:false,
    },
    {
        name:'Ronald Richards',
        company:'Adobe',
        phone:'(302) 555-0107',
        email:'ronald@adobe.com',
        country:'Israel',
        status:true,
    },
    {
        name:'Marvin McKinney',
        company:'Tesla',
        phone:'(252) 555-0126',
        email:'marvin@tesla.com',
        country:'Iran',
        status:false,
    },
    {
        name:'Jerome Bell',
        company:'Google',
        phone:'(629) 555-0129',
        email:'jerome@google.com',
        country:'Réunion',
        status:true,
    },
    {
        name:'Kathryn Murphy',
        company:'Microsoft',
        phone:'(406) 555-0120',
        email:'kathryn@microsoft.com',
        country:'Curaçao',
        status:false,
    },
    {
        name:'Jacob Jones',
        company:'Yahoo',
        phone:'(208) 555-0112',
        email:'jacob@yahoo.com',
        country:'Brazil',
        status:true,
    },
    {
        name:'Kristin Watson',
        company:'Facebook',
        phone:'(704) 555-0127',
        email:'kristin@facebook.com',
        country:'Åland Islands',
        status:false,
    },
]

let searchList = []
let timeoutAnimRow = 0
let timeoutAnimSvg = 0
let activePage = 1

const tableBody = document.querySelector('.table-list tbody')
const search = document.querySelector('.search')

list.map((item,index) => {
if(index + 1 <= 8){
    tableBody.innerHTML += `
    <tr style="animation-delay:${timeoutAnimRow}ms">
        <td class="name"><span>${item.name}</span></td>
        <td class="company"><span>${item.company}</span></td>
        <td class="phone"><a href="tel:+38${item.phone}">${item.phone}</a></td>
        <td class="email"><a href="mailto:${item.email}">${item.email}</a></td>
        <td class="country"><span>${item.country}</span></td>
        <td class="status"><span class="${item.status ? 'active-status' : 'inactive-status'}">${item.status ? 'Active' : 'Inactive'}</span></td>
    </tr>`
    timeoutAnimRow += 150;
}
} )

const rerenderList = (list) => {
    tableBody.innerHTML = ""
    timeoutAnimRow = 0
    list.map((item,index) => {
        if(index + 1 <= 8*activePage && index + 1 > 8*activePage - 8){
            tableBody.innerHTML += `
            <tr style="animation-delay:${timeoutAnimRow}ms">
                <td class="name">${item.name}</td>
                <td class="company">${item.company}</td>
                <td class="phone"><a href="tel:+38${item.phone}">${item.phone}</a></td>
                <td class="email"><a href="mailto:${item.email}">${item.email}</a></td>
                <td class="country">${item.country}</td>
                <td class="status"><span class="${item.status ? 'active-status' : 'inactive-status'}">${item.status ? 'Active' : 'Inactive'}</span></td>
            </tr>`
            timeoutAnimRow += 150;
        }
    } )
    const text = document.querySelector('.table-content__body-bottom p')

    text.innerHTML = `Showing data ${8*activePage - 7} to ${8*activePage} of 256K entries`
}

const addSvgNav = document.querySelectorAll('.nav-row>svg, .table-content__body-bottom')

addSvgNav.forEach(item => {
    item.style.animationDelay = `${timeoutAnimSvg}ms`
    timeoutAnimSvg += 200
})

const allPages = document.querySelectorAll('.page')

allPages.forEach(page => {
    page.addEventListener('click',()=>{
        if(page.dataset.page < 5){
            activePage = +page.dataset.page;
            allPages.forEach(item => {
                item.classList.remove('active')
            })
            page.classList.add('active')
            rerenderList(list)
        }
    })
})

const prevPage = document.querySelector('.prev-page')

prevPage.addEventListener('click',()=>{
    if(activePage == 1){
        console.log('finish')
        return
    }
    activePage -= 1;
    allPages.forEach(item => {
        item.classList.remove('active')
    })
    allPages.forEach(page => {
        if(page.dataset.page == +activePage){
            page.classList.add('active')
        }
    })
    rerenderList(list)
})

const nextPage = document.querySelector('.next-page')

nextPage.addEventListener('click',()=>{

    if(activePage == 4){
        console.log('finish')
        return
    }
    activePage += 1;
    allPages.forEach(item => {
        item.classList.remove('active')
    })
    allPages.forEach(page => {
        if(page.dataset.page == +activePage){
            page.classList.add('active')
        }
    })
    rerenderList(list)

})


search.addEventListener('input',(event) => {
    searchList = list.filter(item => item.name.toLowerCase().includes(event.target.value.toLowerCase()))
    activePage = 1
    allPages.forEach(item => {
        item.classList.remove('active')
        if(item.dataset.page == 1){
            item.classList.add('active')
        }
    })
    rerenderList(searchList)
})

const burgerMenu = document.querySelector('.burger-menu')

burgerMenu.addEventListener('click',()=>{
    document.querySelector('.mobile-header').classList.toggle('open')
})
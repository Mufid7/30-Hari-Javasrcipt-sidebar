// skema codingnya sama kayak navbar hamburger

//ambil tombol toggle
const bukaSidebar = document.querySelector('.sidebar-toggle');
const listMenu = document.querySelector('.sidebar')
const tutupSidebar = document.querySelector('.close-btn')


//buat fungsi agar ketika tombol toggle di klik akan memanipulasi class 'show-sidebar' untuk ditambah/dihapus
bukaSidebar.addEventListener('click',  ()=>{
listMenu.classList.toggle('show-sidebar')
})

tutupSidebar.addEventListener('click',  ()=>{
   listMenu.classList.remove('show-sidebar')
   })



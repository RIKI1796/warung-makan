document.addEventListener('alpine:init', () => {
  Alpine.data('menu', () => ({
    searchQuery: "",
    items: [{
      id: 1, name: 'Sate Ayam', img: 'sateayam.jpg', price: 10000
    },
      {
        id: 2, name: 'Rendang', img: 'rendang.jpg', price: 15000
      },
      {
        id: 3, name: 'Bakso', img: 'bakso.jpg', price: 10000
      },
      {
        id: 4, name: 'Pempek', img: 'pempek.jpg', price: 9000
      },
      {
        id: 5, name: 'Gado-Gado', img: 'gado-gado.jpg', price: 11000
      },
      {
        id: 6, name: 'Nasi Goreng', img: 'nasigoreng.jpg', price: 12000
      },
      {
        id: 7, name: 'Mie Ayam', img: 'mieayam.jpg', price: 9000
      },
      {
        id: 8, name: 'Es Teh', img: 'esteh.jpg', price: 3000
      },
      {
        id: 9, name: 'Gorengan', img: 'gorengan.jpg', price: 1000
      },
    ],
    loading: false,

    async fetchItems() {
      this.loading = true;
      try {
        const urls = this.items.map(item => `items/${item.id}`);
        const responses = await Promise.all(urls.map(url => fetch(url)));
        const data = await Promise.all(responses.map(response => response.json()));

        this.items = data;
      } catch (error) {
        console.error("Error fetching menu data:", error);
      } finally {
        this.loading = false;
      }
    },

    get filteredItems() {
      return this.items.filter((item) =>
        item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  }));

  Alpine.store('cart', {
    items: [],
    total: 0,
    lastTotal: 0,
    quantity: 0, add(newItem) {
      const cartItem = this.items.find((item) => item.id === newItem.id);

      if (!cartItem) {
        this.items.push({
          ...newItem, quantity: 1
        });
        this.total += newItem.price;
      } else {
        cartItem.quantity++;
        this.total += cartItem.price;
      }

      this.quantity = this.items.reduce((sum, item) => sum + item.quantity, 0);
    },
    remove(id) {
      const cartItem = this.items.find((item) => item.id === id);
      if (!cartItem) return;

      if (cartItem.quantity > 1) {
        cartItem.quantity--;
        this.total -= cartItem.price;
      } else {
        this.items = this.items.filter((item) => item.id !== id);
        this.total -= cartItem.price;
      }
      this.quantity = this.items.reduce((sum, item) => sum + item.quantity, 0);
    },
    checkout() {
      this.lastTotal = this.total;
      this.items = [];
      this.total = 0;
      this.quantity = 0;
    },
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const checkButton = document.getElementById('checkout');
  if (checkButton) {
    checkButton.addEventListener('click', () => {
      const lastTotal = Alpine.store('cart').lastTotal;
      if (lastTotal > 0) {
        Swal.fire({
          icon: 'success',
          title: 'Pembayaran Berhasil!',
          text: `Total Pembayaran: ${rupiah(lastTotal)}`,
        });
      }
    });
  }
});


document.addEventListener('alpine:init', () => {
  Alpine.data('favorit',
    () => ({
      items: [{
        id: 2, name: 'Rendang', img: 'rendang.jpg', price: 15000
      },
        {
          id: 3, name: 'Bakso', img: 'bakso.jpg', price: 10000
        },

        {
          id: 6, name: 'Nasi Goreng', img: 'nasigoreng.jpg', price: 12000
        },
        {
          id: 8, name: 'Es Teh', img: 'esteh.jpg', price: 3000
        },
        {
          id: 9, name: 'Gorengan', img: 'gorengan.jpg', price: 1000
        },
      ],
    }));
});


const rupiah = (number) => {
  return new Intl.NumberFormat('id-ID',
    {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(number);
};
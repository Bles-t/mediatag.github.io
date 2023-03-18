const jsmediatags = window.jsmediatags;

document.querySelector("#input").addEventListener("change", (event) => {
  const file = event.target.files[0];


  jsmediatags.read(file, {
    onSuccess: function (tag) {


      const data = tag.tags.picture.data;
      const format = tag.tags.picture.format;
      let base64string = "";

      for (let i = 0; i < data.length; i++)
        base64string += String.fromCharCode(data[i]);

      document.querySelector("#cover").style.backgroundImage = `url(data:${format};base64,${window.btoa(base64string)})`;
      document.querySelector("#title").textContent = tag.tags.title;
      document.querySelector("#artist").textContent = tag.tags.artist;
      document.querySelector("#album").textContent = tag.tags.album;
      document.querySelector("#genre").textContent = tag.tags.genre;
    },
    onError: function (error) {
      console.log(error)
    }

  })

})

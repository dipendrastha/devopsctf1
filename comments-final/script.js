    const search = new URSearchParams(window.location.search);
    const value = search.get("html");

    
    const outputEl = document.getElementById("output");
    //https://html.spec.whatwg.org/multipage/syntax.html#comments
    function escape(input) {
      input = input.replace(/->/g, "_");
      return "<!-- " + input + " -->";
    }

    if (value === null) {
      outputEl.innerHTML = "No comment added";
    } else {
      outputEl.innerHTML = escape(value);
    }
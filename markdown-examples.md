# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

**Input**

````
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).

![An image](/avatar.png)
![An image](/1697637047.png)

<span v-for="i in 3">{{ i }}</span>

{{ 1+1 }}

::: v-pre
{{ This will be displayed as-is }}
:::

<video class="video-player" src="https://fastly.jsdelivr.net/gh/egoist-bot/images@main/uPic/xwc4yH.mp4" controls=""></video>
<video class="video-player" src="/video.mp4" controls=""></video>

<audio controls src="/audio.mp3"></audio>

<iframe height="300" style="width: 100%;" scrolling="no" title="Adaptive Post Card" src="https://codepen.io/coycs/embed/mdpdVEK?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/coycs/pen/mdpdVEK">
  Adaptive Post Card</a> by coycs (<a href="https://codepen.io/coycs">@coycs</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
# stats-uog Extension For Quarto

This extension contains three lua filters:

1) Neat R/Python code block formatting (moves tabs to right etc..)
2) Global R/Python toggle button (appears bottom left)
3) Accessibility extras - e.g. figcaption darker, tab highlighting boxes

The R/Python code blocks and toggler are targeted at the Quarto panel-tabset feature.
e.g.

```markdown
:::{.panel-tabset}
## R

```{r}
x <- 5
```

## Python

```{python}
y = 5
```
:::
```

## Installing (to just use the filter)

```bash
quarto add david-hodge/stats-uog
```

This will install the extension under the `_extensions` subdirectory.
If you're using version control, you will want to check in this directory.

## Using

You can load the filter in your .yml file (or directly in your .qmd file) as

```yaml
filters:
    - stats-uog
```

*For advanced users*: you can also toggle off constituent filters (for example if you don't wish to use the global R/Python toggle button) via some custom metdata.

```yaml
filters:
    - stats-uog

stats-uog:
    code-blocks: true/false
    global-toggle: true/false
    acc-style: true/false
```
Allows toggling off of any of the three filters currently included. Only setting a toggle to false will disable it. Filters are otherwise loaded by default. Your console/terminal text should tell you which filters are being loaded.

## Experimenting

If you wish to experiment then `quarto use template david-hodge/stats-uog` will download the full extension and example folder structure. Then to use locally the quarto command is `quarto use path/to/stats-uog` which copies just the `_extensions` folder as above (see Installing).

## Example

Here is the source code for an example: [example.qmd](example.qmd).


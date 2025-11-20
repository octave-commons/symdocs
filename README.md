<!-- READMEFLOW:BEGIN -->
# @promethean-os/symdocs



[TOC]


## Install

```bash
pnpm -w add -D @promethean-os/symdocs
```

## Quickstart

```ts
// usage example
```

## Commands

- `build`
- `test`
- `symdocs:01-scan`
- `symdocs:02-docs`
- `symdocs:03-write`
- `symdocs:04-graph`
- `symdocs:all`

## License

GPL-3.0-only


### Package graph

```mermaid
flowchart LR
  _promethean_os_symdocs["@promethean-os/symdocs\n0.1.0"]
  _promethean_os_level_cache["@promethean-os/level-cache\n0.1.0"]
  _promethean_os_utils["@promethean-os/utils\n0.0.1"]
  _promethean_os_pipeline_core["@promethean-os/pipeline-core\n0.1.0"]
  _promethean_os_file_indexer["@promethean-os/file-indexer\n0.0.1"]
  _promethean_os_symdocs --> _promethean_os_level_cache
  _promethean_os_symdocs --> _promethean_os_utils
  _promethean_os_symdocs --> _promethean_os_pipeline_core
  _promethean_os_symdocs --> _promethean_os_file_indexer
  classDef focal fill:#fdf6b2,stroke:#222,stroke-width:2px;
  class _promethean_os_symdocs focal;
```


<!-- READMEFLOW:END -->

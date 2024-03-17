"use client";
import React, { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from '@editorjs/header';
import List from "@editorjs/list";
import ImageTool from '@editorjs/image';
import Embed from '@editorjs/embed';
import { Button } from "@/components/ui/button";
import axios from 'axios';

const DEFAULT_INITIAL_DATA = {
  "time": new Date().getTime(),
  "blocks": [
    {
      "type": "header",
      "data": {
        "text": "This is my awesome editor!",
        "level": 1
      }
    },
  ]
}

const EditorComponent = () => {
  const ejInstance = useRef();
  const [readOnly, setReadOnly] = useState(false);

  const toggleReadOnly = () => {
    setReadOnly(prevState => !prevState);
  };

  const initEditor = () => {
    const editor = new EditorJS({
      readOnly: readOnly,
      holder: 'editorjs',
      onReady: () => {
        ejInstance.current = editor;
      },
      autofocus: true,
      data: DEFAULT_INITIAL_DATA,
      tools: {
        header: Header,
        list: List,
        // embed: {
        //   class: Embed,
        //   config: {
        //     services: {
        //       loom: {
        //         regex: /https?:\/\/www\.loom\.com\/share\/([^\/\?]*)(\?.*)?/,
        //         embedUrl: 'https://www.loom.com/share/<%= remote_id %>',
        //         html: '<iframe width="640" height="339" src="https://www.loom.com/share/<%= remote_id %>" frameborder="0" allowfullscreen></iframe>',
        //         id: (groups) => groups[1]
        //       }
        //     }
        //   }
        // },
        embed: {
          class: Embed,
          config: {
            services: {
              loom: {
                regex: /https?:\/\/www\.loom\.com\/share\/([^\/\?]*)(\?.*)?/,
                embedUrl: 'https://www.loom.com/share/<%= remote_id %>',
                html: '<iframe width="640" height="339" src="https://www.loom.com/share/<%= remote_id %>" frameborder="0" allowfullscreen></iframe>',
                id: (groups) => groups[1]
              }
            }
          }
        },
        image: {
          class: ImageTool,
          config: {
            endpoints: {
              // byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
              byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
            }
          }
        }
      },
    });
  };

  useEffect(() => {
    if (ejInstance.current === null) {
      initEditor();
    }

    return () => {
      ejInstance?.current?.destroy();
      ejInstance.current = null;
    };
  }, [readOnly]);

  return (
    <>
      <Button onClick={toggleReadOnly}>Toggle Mode</Button>
      <div id='editorjs'></div>
    </>
  );
}

export default EditorComponent;

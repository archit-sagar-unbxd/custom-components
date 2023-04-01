{{/* vim: set filetype=mustache: */}}
{{/*
Expand the name of the chart.
*/}}
{{- define "ai-demo-ui.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Create a default fully qualified app name.
We truncate at 63 chars because some Kubernetes name fields are limited to this (by the DNS naming spec).
If release name contains chart name it will be used as a full name.
*/}}
{{- define "ai-demo-ui.fullname" -}}
{{- if .Values.fullnameOverride }}
{{- .Values.fullnameOverride | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- $name := default .Chart.Name .Values.nameOverride }}
{{- if contains $name .Release.Name }}
{{- .Release.Name | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- printf "%s-%s" .Release.Name $name | trunc 63 | trimSuffix "-" }}
{{- end }}
{{- end }}
{{- end }}

{{/*
Create chart name and version as used by the chart label.
*/}}
{{- define "ai-demo-ui.chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Common labels
*/}}
{{- define "ai-demo-ui.labels" -}}
helm.sh/chart: {{ include "ai-demo-ui.chart" . }}
{{ include "ai-demo-ui.selectorLabels" . }}
{{- if .Chart.AppVersion }}
app.kubernetes.io/version: {{ .Chart.AppVersion | quote }}
{{- end }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
{{- end }}

{{/* Selector labels */}}
{{- define "ai-demo-ui.selectorLabels" -}}
{{- range $key, $value := .Values.selectorLabels -}}
{{ $key }}: {{ $value | quote }}
{{ end }}
{{- end }}

{{/*
Create the name of the service account to use
*/}}
{{- define "ai-demo-ui.serviceAccountName" -}}
{{- if .Values.serviceAccount.create }}
{{- default (include "ai-demo-ui.fullname" .) .Values.serviceAccount.name }}
{{- else }}
{{- default "default" .Values.serviceAccount.name }}
{{- end }}
{{- end }}

{{/* ENV vars */}}
{{- define "ai-demo-ui.envVars" -}}
{{- range $k, $v := .Values.envVars }}
- name: {{ index $v "name" }}
  value: {{ tpl ( index $v "value" ) $ | quote }}
{{- end }}
{{- end }}